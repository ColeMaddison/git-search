'use strict';

// ajax request handler
let req = (word) => {
    $.ajax({
        url: `https://api.github.com/search/repositories?q=${word}`,
        data: {
            client_id: '55db839d74c2ad0eea4d',
            client_secret: '7848198170d2e608375b0ff90d1056fe0418cb3a'
        }
    }).done((repos) => {
        $('.searchResult').remove();
        $('.errorMes').remove();
        let repsamount = repos.total_count;
        let repItems = repos.items;
        generateAmount(repsamount);
        for(let i = 0; i< repItems.length; i++){
            generateBlock(repItems[i]);
        }
    }).fail((err) => {
        $('.searchResult').remove(); 
        console.log(err);
        generateError();
    });
};

// generate total search results block
let generateAmount = (repAmount) => {
    let repAmountDiv = $('<div></div>');
    repAmountDiv.addClass('searchResult col-md-6 col-md-offset-3');
    repAmountDiv.html(`
        <h3>${repAmount} repositories results</h3>
    `);

    let row = $('.row');
    row.append(repAmountDiv);
};

// generate block for every found result
let generateBlock = (repos) => {
    let searchRes = $('<div></div>');
    searchRes.addClass('searchResult col-md-6 col-md-offset-3');

    searchRes.html(`
        <ul class="repList">
            <div class="repListItem">
                <div class="repInfo col-md-6">
                    <h3>
                        <a href="${repos.html_url}" target="_blank">${repos.name}</a>
                    </h3>
                    <p class="repDesc">${repos.description}</p>
                    <div class="reptopic">
                        <a href="https://github.com/topics/${repos.language ? repos.language.toLowerCase() : '#'}" target="_blank">
                            ${repos.language ? repos.language : 'No language'}
                        </a>
                    </div>
                    <div class="repLycDat">
                        <p>${repos.license ? repos.license.name : 'No license'}</p>
                        <p class="repDate">Last update: ${Date(repos.updated_at)}</p>
                    </div>
                </div>
                <div class="repLang col-md-3">
                    <p>${repos.language ? repos.language : 'No language'}</p>
                </div>
                <div class="repStars col-md-3">
                    <a href="https://github.com/${repos.owner.login}/${repos.name}/stargazers" target="_blank">${repos.stargazers_count} Stars</a>
                    <input class="deleteResult" type="submit" value="Remove">
                </div>
            </div>
        </ul>
    `);

    let row = $('.row');
    row.append(searchRes);
};

// show message in case error happens with ajax req
let generateError = () => {
    let row = $('.row');
    let errorMes = $('<div></div>');
    errorMes.addClass('errorMes col-md-8 col-md-offset-5');
    errorMes.html(`
        <h3>No such query<h3>
    `);
    row.append(errorMes);
};
