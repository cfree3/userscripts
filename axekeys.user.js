// ==UserScript==
// @name        AxeKeys
// @author      Curtis Free (http://curtisfree.com)
// @namespace   com.curtisfree.userscripts
// @description Enables the use of a limited set of Vim navigation keybindings.
// @include     http://*
// @include     https://*
// ==/UserScript==

/*
 * NOTE/CREDIT: For a fuller Vim-like experience, check out the (unaffiliated)
 * Vimperator (http://vimperator.org/vimperator).
 */

/*
 * This code is brought to you by the following sites:
 *
 *  * http://www.quirksmode.org/js/introevents.html
 *  * http://www.cryer.co.uk/resources/javascript/script20_respond_to_keypress.htm
 *  * http://www.techsww.com/tutorials/web_development/javascript/tips_and_tricks/javascript_go_to_top_of_page.php
 *  * http://login2win.blogspot.com/2010/07/javascript-scroll-to-bottom-of-page.html
 *  * https://groups.google.com/group/greasemonkey-users/browse_thread/thread/782332cad49d95cb/6afb3f82b6c870f7?pli=1
 *  * http://www.oreillynet.com/pub/a/network/2005/11/01/avoid-common-greasemonkey-pitfalls.html?page=3
 *
 * Quite literally, most of the code below is from those sites. This script ties
 * the code together uses it to respond to (and in response to) keybord shortcuts
 * based on those in Vim/Vimperator.
 */

(function() {

  var keypress_buffer = '';

  var handle_keypress = function(ev) {
    var character = String.fromCharCode(ev.which);

    // collect 'g' to look for a `gg`
    if (character == 'g') {
      keypress_buffer += character;

    // `G` = go to bottom
    } else if (character == 'G') {
      keypress_buffer = '';
      window.scrollTo(0, document.body.scrollHeight);

    // `j` = scroll down
    } else if (character == 'j') {
      keypress_buffer = '';
      window.scrollBy(0, 50);

    // `k` = scroll up
    } else if (character == 'k') {
      keypress_buffer = '';
      window.scrollBy(0, -50);

    // clear buffer on anything else
    } else {
      keypress_buffer = '';
    }

    // `gg` = go to top
    if (keypress_buffer == 'gg') {
      keypress_buffer = '';
      window.scrollTo(0,0);
    }

  };

  document.addEventListener('keypress', handle_keypress, true);

})();

