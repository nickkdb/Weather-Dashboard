var apiKey= "d8edbfd8347bc54ee0c89492b16ea074"
var searchCity= $("#searchTerm");

$(document).ready(function(){
    $(".btn").on("click", function(e) {
        e.preventDefault();
        searchCity = searchCity.val();
        var queryURL1= "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + apiKey + "&units=imperial";
    
    
        $.ajax({
            url: queryURL1,
            method: "GET"
        }).done(function (response){
            console.log(response);
        })
    })

})


