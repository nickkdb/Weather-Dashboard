var apiKey= "d8edbfd8347bc54ee0c89492b16ea074"
var searchCity= $("#searchTerm");
var cityTitle= $("#cityTitle");
var temp= $("#temp");

$(document).ready(function(){
    $(".btn").on("click", function(e) {
        e.preventDefault();
        searchCity = searchCity.val();
        var queryURL1= "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + apiKey + "&units=imperial";
    
    
        $.ajax({
            url: queryURL1,
            method: "GET"
        }).done(function (data){
            var result = data;
            console.log(result);
            setCard(result);
        })
    })

    function setCard(input) {
        var icon= input.weather[0].icon;
        var iconURL= "http://openweathermap.org/img/w/" + icon + ".png";
        $(cityTitle).text(input.name + " (" + moment().format('l') + ")");
        $("<img>", {
            src: iconURL,
            alt: "icon"
        }).appendTo(cityTitle);

    }

})


