'use strict';

$(document).ready(() => {
    let input = $('.inputText');
    let searchBtn = $('.submitBtn');
    input.focus();

    // search btn handler
    searchBtn.on('click', (e) => {
        e.preventDefault();
        let searchWord = input.val();
        let patt = /w+/;
        if(searchWord && searchWord.match(/^\w+/)){
            req(searchWord);
        }
    });
    
    // delete button event handler
    $(document.body).on('click', '.deleteResult', (e) => {
        e.target.parentNode.parentNode.parentNode.parentNode.remove();
    });
});