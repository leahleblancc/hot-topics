/*global $, document*/
$(document).ready(function () {
    
    "use strict";
    
    var contents, url;
         
    contents = {};
    
    $(".content .box").load("./partials/home.html", function (rsp) {
        contents["./partials/home.html"] = rsp;
    });
    
    

    function storeContents(urlVal) {
        
        $(".content .box").load(urlVal, function (rsp) {
            
            if (!contents[urlVal]) {
                
                contents[urlVal] = rsp;
                
                $(this).hide().html(contents[urlVal]).fadeIn();
                // console.log("Async loaded.");
                
            } else {
                
                $(this).hide().html(contents[urlVal]).fadeIn();
                // console.log("Loaded from object.");
            }
        });
    }
    

    $(".navbar a").on("click", function (e) {
        
        e.preventDefault();
        
        url = $(this).attr("href");
		
        storeContents(url);
    });
});