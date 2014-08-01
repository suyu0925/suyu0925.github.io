// 微信分享的数据
window.wxData = {
    "appId": "", // 服务号可以填写appId
    "imgUrl": 'http://suyu0925.github.io/res/icon.jpg',
    "link": 'http://suyu0925.github.io',
    "desc": "看看你够不够色",
    "title": "玩完这个游戏我整个人都崩溃了"
};

function share(m, step, percent) {
    if (m == 0) {
        document.title = window.wxData.desc = "跑啊，跑神马？你是我的小羊驼～～～";
    }
    if (m == 1) {
        document.title = window.wxData.desc = "继续刷屏！" + step + "步推倒我的小羊驼，打败" + percent + "%朋友圈的人！你能超过我吗？";
    }
    if (m == 2) {
        document.title = window.wxData.desc = "我滴小羊驼呀它又跑掉了，T_T 快帮我抓回来！";
    }
};

WeixinApi.ready(function (Api) {

    // 分享的回调
    var wxCallbacks = {
        ready: function () {
        },

        cancel: function (resp) {
        },

        fail: function (resp) {
        },

        confirm: function (resp) {
        },

        all: function (resp) {
        }
    };

    Api.shareToFriend(wxData, wxCallbacks);

    Api.shareToTimeline(wxData, wxCallbacks);

    Api.shareToWeibo(wxData, wxCallbacks);
});