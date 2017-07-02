let params = new URLSearchParams(location.search.slice(1))
const greaterThanTen = true // 大于10
const parentheses = true // 带括号
const space = '&nbsp;'
function padding(n, l) {
  if (l === undefined) {
    l = 2
  }
  let s = n.toString()
  if (s.length < l) {
    for (let i = 0; i < l - s.length; i++) {
      s = '&nbsp;' + s
    }
  }
  return s
}
function getRandomExp() {
  let str
  while (true) {
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)
    const sign = Math.random() > 0.5 ? '+' : '-'
    if (a === 0 || b === 0) {
      continue
    }
    if (greaterThanTen) {
      if (a < 10 || b < 10) {
        continue
      }
    }
    if (a < 10 && b < 10) {
      continue
    }
    if (parentheses) {
      if (sign === '+') {
        str = `(${space}${space})-${padding(a)}=${padding(b)}`
      } else {
        str = `${padding(b)}+(${space}${space})=${padding(a)}`
      }
    } else {
      str = a + sign + b + '='
      if (a < 10) str = '&nbsp;' + str
      if (b < 10) str = '&nbsp;' + str
    }
    if (sign === '+') {
      if (a + b < 100) {
        break
      }
    } else {
      if (a > b) {
        break
      }
    }
  }
  return str
}
$(function () {
  for (let i = 0; i < 20; i++) {
    let template = $('#rowTemplate').html()
    template = template.replace('{{1}}', getRandomExp())
    template = template.replace('{{2}}', getRandomExp())
    template = template.replace('{{3}}', getRandomExp())
    template = template.replace('{{4}}', getRandomExp())
    template = template.replace('{{5}}', getRandomExp())
    $('#container').append(template)
  }
  if (parentheses) {
    $('.row > h3').css('font-size', '1.3em')
  }
})
