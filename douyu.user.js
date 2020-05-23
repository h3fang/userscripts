// ==UserScript==
// @name         douyu
// @version      0.4
// @description  less clutter and wider player
// @author       h3fang
// @match        *://*.douyu.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // from https://greasyfork.org/zh-CN/scripts/386642-%E6%96%97%E9%B1%BC%E7%B2%BE%E7%AE%80
    var css = '{display:none !important;height:0 !important}';
    css += '.layout-Player-rank{display:none !important}';
    css += '.layout-Player-barrage{top:40px !important;}';
    css += '.layout-Player-video{bottom:0px !important}';
    // css += '.layout-Player-toolbar{visibility:hidden !important;}';
    css += '.layout-Bottom{display:none !important;}';
    css += '.guessGameContainer.is-normalRoom{display:none !important;}';
    css += '.DropPane-ad{display:none !important}';
    css += '.SignBaseComponent-sign-ad{display:none !important}';
    css += '.DropMenuList-ad{display:none !important;}';
    // css += '.AnchorAnnounce{display:none !important;}';
    css += '.FansMedalPanel-enter{display:none !important;}';
    css += '.layout-Aside{display:none !important;}';
    css += '.Header-download-wrap{display:none !important;}';
    css += '.Header-broadcast-wrap{display:none !important;}';
    css += '#js-header > div > div > div.Header-left > div > ul > li:nth-child(5){display:none !important;}';
    css += '.ChatNobleBarrage{display:none !important;}';
    css += '.ChatFansBarrage{display:none !important;}';
    css += '.Horn4Category{display:none !important;}';
    css += '.FirePower{display:none !important;}';
    css += '.TreasureDetail{display:none !important;}';
    css += '.SignChatAd-chat-ad-cls{display:none !important;}';
    css += '.Promotion-nobleRights{display:none !important;}';
    css += '.Task{display:none !important;}';
    css += '.UPlayerLotteryEnter.is-active{display:none !important;}';
    css += '.LotteryContainer{display:none !important;}';
    css += '.layout-Module-head.FollowList-head.is-fixed{display:none !important;}';
    css += '.layout-Banner-item{display:none !important;}';
    css += '.layout-Module-extra{display:none !important;}';
    css += '.Act129684Bar-view1{display:none !important;}';
    css += '.Act129684Bar-content{display:none !important;}';
    css += '.Act129684-logo{display:none !important;}';
    css += '.ActBase-switch{display:none !important;}';
    css += '.HeaderNav{display:none !important;}';
    css += '.HeaderGif-left{display:none !important;}';
    css += '.HeaderGif-right{display:none !important;}';
    css += '.Prompt-container{display:none !important;}';
    css += '.SysSign-Ad{display:none !important;}';
    css += '.ActDayPay-toast{display:none !important;}';
    css += '.code_box-5cdf5a{display:none !important;}';
    css += '.normalDiv-8b686d{display:none !important;}';
    css += '.closeBg-998534{display:none !important;}';
    css += '.bg-d4758b{display:none !important;}';
    css += '.fireOpenRanking react-draggable react-draggable-dragged{display:none !important;}';
    css += '.vsFestival1908{display:none !important;}';
    css += '.ActSuperFansGroup-component.ActSuperFansGroupBar-normalBody{display:none !important;}';
    css += '.ActSuperFansGroup-component.ActSuperFansGroupBar-miniBody{display:none !important;}';
    css += '.ActSuperFansGroup-component.ActSuperFansGroupBar-plusBody{display:none !important;}';
    css += '.ActSuperFansGroup-logo{display:none !important;}';
    css += '.ActSuperFansGroup-switch{display:none !important;}';
    css += '.Act156581Bar{display:none !important;}';
    css += '.Act159742Bar-main--pre{display:none !important;}';
    css += '.Act159742-logo{display:none !important;}';
    css += '.Act159742Bar-wrap{display:none !important;}';
    css += '.double11{display:none !important;}';
    css += '.Act163201Bar-wrap{display:none !important;}';
    css += '.Act163201-logo{display:none !important;}';
    css += '.ActBase-switchWrap{display:none !important;}';
    css += '.content-0fa509{display:none !important;}';
    css += '.Frawdroom{display:none !important;}';
    css += '#js-room-activity{display:none !important;}';
    css += '#bc1915{display:none !important;}';
    css += '#bc1215{display:none !important;}';
    css += '#__h5player > div.recommendApp-0e23eb:nth-child(3){display:none !important;}';
    css += '#__h5player > div.recommendView-3e8b62:first-child > div:last-child > div.recommendView-1c2131{display:none !important;}';
    css += '#__h5player > div.recommendAD-54569e:nth-child(9){display:none !important;}';
    css += '#__h5player > div.recommendView-3e8b62:first-child > div:first-child > div{display:none !important;}';
    css += '#js-player-title > div.Title > div.Title-roomInfo:last-child > div.Title-row:last-child{display:none !important;}';

    // custom
    css += '.PrivilegeGiftModalDialog{display:none !important;}';
    css += '.LuckyStartEnter{display:none !important;}';

    // wide player
    css += '.layout-Main{padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; width: 100% !important; max-width: 100% !important;}';
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

    var root = document.querySelector('#root');
    if (root) {
        root.appendChild(document.querySelector('.layout-Main'));
        document.querySelector('.layout-Main').style.paddingTop = "60px";
    }
    document.querySelectorAll('#root > .bc-wrapper').forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll('.wm-general').forEach(e => e.parentNode.removeChild(e));

    var waitForTitle = setInterval(function() {
        var e = document.querySelector('.Title-categoryWrap.clearFix');
        if (e) { e.classList.remove("clearFix"); }
    }, 1000);
})();