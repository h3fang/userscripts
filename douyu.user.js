// ==UserScript==
// @name         douyu
// @version      0.6
// @description  less clutter and wider player
// @author       h3fang
// @match        *://*.douyu.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var title_height = document.querySelector('.Header').offsetHeight;
    var player = document.querySelector('.layout-Main');
    document.querySelectorAll('.wm-general').forEach(e => {
        if (!e.contains(player)) {
            e.remove();
        }
        else {
            e.style['margin-top'] = title_height + "px";
        }
    });
    document.querySelectorAll('#root > .bc-wrapper').forEach(e => e.remove());

    // from https://greasyfork.org/zh-CN/scripts/386642-%E6%96%97%E9%B1%BC%E7%B2%BE%E7%AE%80
    var css = '{display:none !important;height:0 !important}';
    //全局
    css += '.layout-Bottom{display:none !important;}';//视频底部“鱼吧/友邻”
    css += '.layout-Aside{display:none !important;}';//左侧导航栏
    css += '#js-room-activity{display:none !important;}';//右侧悬浮广告
    //顶部工具栏
    css += '.Header-wrap{background: #F6F4EC !important}';//顶部工具栏背景颜色
    css += '.Header-download-wrap{display:none !important;}';//顶部工具栏右侧“客户端下载”
    css += '.Header-broadcast-wrap{display:none !important;}';//顶部工具栏右侧“开播”
    css += '#js-header > div > div > div.Header-left > div > ul > li:nth-child(5){display:none !important;}';//顶部工具栏左侧“游戏”
    css += '.DropPane-ad,.DropMenuList-ad{display:none !important}';//顶部工具栏“分类”“历史”“关注”菜单内底部广告
    css += '.Promotion-nobleRights{display:none !important;}';//顶部工具栏账户头像弹出菜单“开通贵族条幅”
    css += '.Task{display:none !important;}';//顶部工具栏账户头像弹出菜单“我的任务”
    css += '.HeaderNav{display:none !important;}';//顶部工具栏中间广告
    css += '.HeaderGif-left{display:none !important;}';//顶部工具栏左广告动画
    css += '.HeaderGif-right{display:none !important;}';//顶部工具栏右广告动画
    css += '.Search-ad{display:none !important;}';//顶部工具栏搜索框弹出菜单“底部广告”
    css += '.Search-hot{display:none !important;}';//顶部工具栏搜索框弹出菜单“中间热门搜索”
    css += '.Search-default{display:none !important;}';//顶部工具栏搜索框弹出菜单“顶部推荐搜索”
    css += '.CloudGameLink-text{display:none !important;}';//顶部工具栏右侧用户头像弹出菜单“顶部广告”
    //视频上方标题栏
    css += '#js-player-title > div.Title > div.Title-anchorPic:first-child{display:none !important;}';//主播头像
    css += '#js-player-title > div.Title > div.Title-roomInfo:last-child > div.Title-row:last-child{display:none !important;}';//标题栏第三排
    //视频区
    css += '.layout-Player-video{bottom:0px !important}';//网页全屏时视频高度修正
    css += '.adPic_4kxGCX .adPicRoot_4kxGCX,.closeBtn_4kxGCX{display:none !important;}';//视频区左侧广告
    css += '.GuessGameMiniPanelB-wrapper.is-show{display:none !important;}';//视频区下方横幅“鱼丸预测”
    css += '.shark-webp .LiveRoomDianzan-thumb{display:none !important;}';//视频区右下角“点赞”
    css += '.RedEnvelopAd-content{display:none !important;}';//视频区右下角弹出读秒广告
    css += '.adPicRoot_4kxGCX{display:none !important;}';//视频区左侧“火锅电竞”
    css += '.PcDiversion{display:none !important;}';//视频区画面卡顿提示弹窗
    css += '.FirstRechargePayPanel{display:none !important;}';//视频区弹出“首充礼包”
    css += '.layout-Player-toolbar{visibility:hidden !important;}';//视频底部“礼物栏”
    css += '.ChargeTask-closeBg{display:none !important;}';//视频区左侧“亲密互动”
    css += '.XinghaiAd-card.is-type1{display:none !important;}';//视频区左下角游戏广告“影与剑”
    css += '.InteractPlayWithPendant{display:none !important;}';//视频区左下角广告“滴滴上车”
    //视频区未开播界面
    css += '#__h5player > div.recommendApp-0e23eb:nth-child(3){display:none !important;}';//未开播界面客户端推广二维码
    css += '#__h5player > div.recommendView-3e8b62:first-child > div:last-child > div.recommendView-1c2131{display:none !important;}';//未开播界面视频与其他主播推荐
    css += '#__h5player > div.recommendView-3e8b62:first-child > div:first-child > div{display:none !important;}';//未开播界面最后一帧模糊背景
    css += '.RecommendADClose-a0b35a,.ad-corner-3d7692,.recommendADdev-2f3a5a{display:none !important;}';//未开播界面左下角广告
    //右侧弹幕显示区
    css += '#layout-Player-aside > div.layout-Player-asideMainTop:first-child > div.layout-Player-announce:first-child{display:none !important;}';//弹幕区顶部“视频回看”
    css += '.layout-Player-rank{display:none !important}';//弹幕区顶部“周榜”
    css += '.layout-Player-barrage{top:0px !important;}';//弹幕区高度修正
    css += '.layout-Player-barrage{background: #F6F4EC !important;}';//弹幕区背景颜色
    css += '.SignBaseComponent-sign-ad,.BarrageSuspendedBallAd-chat-ad-cls{display:none !important}';//弹幕区悬浮广告
    css += '.TreasureDetail{display:none !important;}';//弹幕区右下角掉落倒计时宝箱
    //右侧弹幕输入区
    css += '.ChatNobleBarrage{display:none !important;}';//弹幕输入框上方“贵族弹幕”
    css += '.ChatFansBarrage{display:none !important;}';//弹幕输入框上方“粉丝弹幕”
    css += '.Horn4Category{display:none !important;}';//弹幕输入框上方“分区喇叭”
    css += '.FansMedalPanel-enter{display:none !important;}';//弹幕输入框左侧“粉丝徽章”
    css += '.FansMedalPanel-container{display:none !important;}';//弹幕输入框左侧“粉丝徽章框体”
    css += '.MatchSystemMedalPanel-enter{display:none !important;}';//<英雄联盟赛事直播间>弹幕输入框左侧“粉丝徽章”
    css += '.MatchSystemMedalPanel-container{display:none !important;}';//<英雄联盟赛事直播间>弹幕输入框左侧“粉丝徽章框体”
    css += '.ChatSend-txt{padding: 5px 13px 5px 5px !important;}';//弹幕输入框位置调整
    css += '.ChatSend-txt{width: 258px !important;}';//弹幕输入框宽度调整
    css += '.ChatSend-txt{background: #F6F4EC !important;}';//弹幕输入框背景颜色
    //右侧弹幕区内弹幕内容元素
    // css += '.UserLevel{display:none !important;}';//ID前“用户等级”徽章
    css += '.Medal-image{display:none !important;}';//ID前“金鲨鱼”徽章
    css += '.Barrage-honor{display:none !important;}';//ID前“贡献日榜”徽章
    css += '.MRight-icon{display:none !important;}';//ID前“意中人”徽章
    // css += '.Barrage-icon{display:none !important;}';// ID前“贵族”徽章
    // css += '.FansMedal{display:none !important;}';//ID前“粉丝”徽章
    // css += '.RoomLevel{display:none !important;}';//ID前“房间等级”徽章
    css += '.Motor{display:none !important;}';//ID前“单字”徽章
    css += '.ChatAchievement-image{display:none !important;}';//ID前“鱼塘海王”徽章
    css += '.MatchSystemTeamMedal{display:none !important;}';//ID前“比赛队伍”徽章
    css += '.FirePowerIcon{display:none !important;}';//火力全开弹幕后缀“火”徽章
    css += '.Barrage-notice{display:none !important;}';//弹幕内容“主播开播提示”
    //关注页
    css += '.layout-Banner-item{display:none !important;}';//关注列表页上方两条横幅广告
    css += '.layout-Module-extra{display:none !important;}';//关注列表页右上“主播视频/免费领取”
    css += '.ScrollTabFrame-title.active-tab{display:none !important;}';//关注列表页左上“我的关注”
    css += '.u-specialStateInput[name=js-aside-state]:checked~.layout-Main .layout-Module-head.is-fixed{display:none !important;}';//关注页下拉后“顶部弹出工具栏”
    //测试
    //css += '.UPlayerLotteryEnter.is-active{display:none !important;}';//视频区抽奖倒计时小窗
    //css += '.LotteryContainer{display:none !important;}';//视频区抽奖弹窗

    // custom
    css += '.PrivilegeGiftModalDialog{display:none !important;}';
    css += '.LuckyStartEnter{display:none !important;}';

    // wide player
    css += '.layout-Main{padding-top: 0 !important; padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; width: 100% !important; max-width: 100% !important;}';
    css += '.layout-Player-title{margin-bottom: 1px; min-height: 20px;}';
    css += '.Title{height:100%; padding-left:10px; padding-top: 0; padding-bottom: 0;}';
    css += '.Title-row{display:inline-block !important;}';
    css += '.Title-roomInfo > .Title-row:nth-child(3){display:none !important;}';
    css += '.Title-header{overflow:unset !important; text-overflow: clip; max-width: 500px !important;}';
    css += '.layout-Player-aside{height:90% !important;}';

    function loadStyle(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.appendChild(document.createTextNode(css));
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    }

    loadStyle(css);
})();