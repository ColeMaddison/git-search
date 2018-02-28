"use strict";$(document).ready(function(){var e=$(".inputText"),a=$(".submitBtn");e.focus(),a.on("click",function(a){a.preventDefault();var n=e.val();n&&n.match(/^\w+/)&&req(n)}),$(document.body).on("click",".deleteResult",function(e){e.target.parentNode.parentNode.parentNode.parentNode.remove()})});var req=function(e){$.ajax({url:"https://api.github.com/search/repositories?q="+e,data:{client_id:"55db839d74c2ad0eea4d",client_secret:"7848198170d2e608375b0ff90d1056fe0418cb3a"}}).done(function(e){$(".searchResult").remove(),$(".errorMes").remove();var a=e.total_count,n=e.items;generateAmount(a);for(var t=0;t<n.length;t++)generateBlock(n[t])}).fail(function(e){$(".searchResult").remove(),console.log(e),generateError()})},generateAmount=function(e){var a=$("<div></div>");a.addClass("searchResult col-md-6 col-md-offset-3"),a.html("\n        <h3>"+e+" repositories results</h3>\n    "),$(".row").append(a)},generateBlock=function(e){var a=$("<div></div>");a.addClass("searchResult col-md-6 col-md-offset-3"),a.html('\n        <ul class="repList">\n            <div class="repListItem">\n                <div class="repInfo col-md-6">\n                    <h3>\n                        <a href="'+e.html_url+'" target="_blank">'+e.name+'</a>\n                    </h3>\n                    <p class="repDesc">'+e.description+'</p>\n                    <div class="reptopic">\n                        <a href="https://github.com/topics/'+(e.language?e.language.toLowerCase():"#")+'" target="_blank">\n                            '+(e.language?e.language:"No language")+'\n                        </a>\n                    </div>\n                    <div class="repLycDat">\n                        <p>'+(e.license?e.license.name:"No license")+'</p>\n                        <p class="repDate">Last update: '+Date(e.updated_at)+'</p>\n                    </div>\n                </div>\n                <div class="repLang col-md-3">\n                    <p>'+(e.language?e.language:"No language")+'</p>\n                </div>\n                <div class="repStars col-md-3">\n                    <a href="https://github.com/'+e.owner.login+"/"+e.name+'/stargazers" target="_blank">'+e.stargazers_count+' Stars</a>\n                    <input class="deleteResult" type="submit" value="Remove">\n                </div>\n            </div>\n        </ul>\n    '),$(".row").append(a)},generateError=function(){var e=$(".row"),a=$("<div></div>");a.addClass("errorMes col-md-8 col-md-offset-5"),a.html("\n        <h3>No such query<h3>\n    "),e.append(a)};
