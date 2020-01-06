// ==UserScript==
// @name         MTR highspeed rail default values
// @version      0.1
// @description  default values for input controls
// @author       h3fang
// @match        *://www.ticketing.highspeed.mtr.com.hk/its/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelector("#departStationName").value = "Wuhan"
    document.querySelector("#departStationCode").value = "WHN"
    document.querySelector("#arriveStationName").value = "HK West Kowloon"
    document.querySelector("#arriveStationCode").value = "XJA"
    document.querySelector("#departDate").value = "2020-02-01";
    document.querySelector("#departDateHide").value = "20200201";
    document.querySelector("#captcha").focus();

})();