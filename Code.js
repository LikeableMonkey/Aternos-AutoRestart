// ==UserScript==
// @name         Aternos AutoStart
// @icon         https://aternos.org/favicon.ico
// @namespace    https://github.com/LikeableMonkey/Aternos-AutoRestart
// @version      0.1
// @description  Aternos AutoStart
// @author       LikeableMonkey
// @match        https://aternos.org/server/*
// @grant        none
// ==/UserScript==

(function(){
    var tm;
    var str;
    var res;
    setInterval(function(){
        if(document.querySelector("#read-our-tos > main > section > div.page-content.page-server > div.server-status > div.status.offline > div > span.statuslabel-label-container > span").innerText == 'Crashed')
        {
            document.getElementById('start').click();
        }
        document.getElementById('confirm').click();
        tm = COUNTDOWN.valueOf();
        var str = document.getElementById('players').innerText;
        var res = str.charAt(0);
        if(tm<20 && tm && res=='0')
        {
            document.getElementById('restart').click();
            location.reload();
        }
        if(tm<30 && tm)
        {
            location.reload();
        }
    },5000)
})();
