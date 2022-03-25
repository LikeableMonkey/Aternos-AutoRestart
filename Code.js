// ==UserScript==
// @name         Aternos AutoStart
// @icon         https://aternos.org/favicon.ico
// @namespace    https://github.com/LikeableMonkey/Aternos-AutoRestart
// @version      0.1
// @description  Aternos AutoStart
// @author       LikeableMonkey
// @include      https://aternos.org/server/*
// @grant        none
// ==/UserScript==

(function(){
var tm;
var str;
var res;
setInterval(function(){
    //remove the "//" from the next line to automaticaly start the server when you load the page
    //document.getElementById('start').click();
    document.getElementById('confirm').click();
    tm = COUNTDOWN.valueOf();
    var str = document.getElementById('players').innerText;
    var res = str.charAt(0);
    if(tm<30 && tm && res=='0')
    {
        document.getElementById('restart').click();
        location.reload();
    }
},5000)
})();
