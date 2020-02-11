// ==UserScript==
// @name         douyu
// @version      0.3
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
    css += '.layout-Player-barrage{top:0px !important;}';
    css += '.layout-Player-video{bottom:0px !important}';
    css += '.layout-Player-toolbar{visibility:hidden !important;}';
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
    css += '.Title-anchorPic{display:none !important;}';
    css += '.Title-roomOtherBottom{display:none !important;}';
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
    css += '.TitleSuperFansIcon{display:none !important;}';
    css += '.Act156581Bar{display:none !important;}';
    css += '.Act159742Bar-main--pre{display:none !important;}';
    css += '.Act159742-logo{display:none !important;}';
    css += '.Act159742Bar-wrap{display:none !important;}';
    css += '.double11{display:none !important;}';
    css += '.Act163201Bar-wrap{display:none !important;}';
    css += '.Act163201-logo{display:none !important;}';
    css += '.ActBase-switchWrap{display:none !important;}';
    css += '.Title-columnTag{display:none !important;}';
    css += '.Title-impress.clearFix{display:none !important;}';
    css += '.content-0fa509{display:none !important;}';
    css += '.Frawdroom{display:none !important;}';
    css += '#js-room-activity{display:none !important;}';
    css += '#js-player-dialog > div.player-dialog > div.PcDiversion:nth-child(8){display:none !important;}';
    css += '#bc1915{display:none !important;}';
    css += '#bc1215{display:none !important;}';
    css += '#__h5player > div.recommendApp-0e23eb:nth-child(3){display:none !important;}';
    css += '#__h5player > div.recommendView-3e8b62:first-child > div:last-child > div.recommendView-1c2131{display:none !important;}';
    css += '#__h5player > div.recommendAD-54569e:nth-child(9){display:none !important;}';
    css += '#__h5player > div.recommendView-3e8b62:first-child > div:first-child > div{display:none !important;}';

    // custom
    css += '.PrivilegeGiftModalDialog{display:none !important;}';
    css += '.LuckyStartEnter{display:none !important;}';

    // wide player
    css += '.layout-Main{padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; width: 100% !important; max-width: 100% !important;}';
    css += '.layout-Player-title{margin-bottom: 1px; min-height: 20px;}';
    css += '.Title{height:100%; padding-left:10px; margin-bottom: 3px;}';
    css += '.Title-headline{display:inline;}';
    css += '.Title-headlineH2{margin-right:5px;}';
    css += '.Title-roomOtherTop{top:3px;}';
    css += '.Title-categoryWrap{display:inline;}';
    css += '.layout-Player-aside{height:90% !important;}';
    css += '.bc-wrapper{height:10px !important;}';

    function loadStyle(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.appendChild(document.createTextNode(css));
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    }

    function set_volume(v) {
        ['player_storage_volume_h5p_room', 'player_storage_volume_sy_h5p_room'].forEach(key => {
            var player_storage = JSON.parse(window.localStorage.getItem(key));
            if (player_storage) {
                player_storage.v = String(v);
                window.localStorage.setItem(key, JSON.stringify(player_storage));
            }
        });
    }

    loadStyle(css);

    var waitForTitle = setInterval(function() {
        var e = document.querySelector('.Title-categoryWrap.clearFix');
        if (e) { e.classList.remove("clearFix"); }
    }, 1000);

    if (window.location.href.match(/\b208114\b/)) {
        set_volume(0.32);
    }
    else {
        set_volume(0.5);
    }
})();