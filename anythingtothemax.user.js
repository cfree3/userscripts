// ==UserScript==
// @name        Anything to the Max
// @author      Curtis Free (http://curtisfree.com)
// @namespace   com.curtisfree.userscripts
// @description Shows the "use your own image" form by default on _Koalas to the Max dot Com_.
// @include     http://koalastothemax.com/*
// ==/UserScript==

(function() {
    var own_image = document.getElementById('next');
    if (own_image && own_image.style['display'] == 'none') {
        own_image.style['display'] = '';
    }
})();

