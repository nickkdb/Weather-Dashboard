var apiKey= "d8edbfd8347bc54ee0c89492b16ea074"
var searchCity= $("#searchTerm");
var queryURL1= "api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + apiKey;

$(document).ready(function(){
    $(".btn").on("click", function() {
        searchCity = searchCity.val();
    
    
        $.ajax({
            url: queryURL1,
            method: "GET"
        }).done(function (response){
            console.log(response);
        })
    })

})


