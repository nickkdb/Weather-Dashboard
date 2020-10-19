var apiKey= "d8edbfd8347bc54ee0c89492b16ea074"
var searchCity= $("#searchTerm");
var cityTitle= $("#cityTitle");
var temp= $("#temp");
var humid= $("#humidity");
var windspeed= $("#windspeed");
var uvIndex= $("#uvindex");

$(document).ready(function(){
    $(".btn").on("click", function(e) {
        e.preventDefault();
        searchCity = searchCity.val();
        var queryURL1= "https://api.openweathermap.org/data/2.5/weather?q=" +  searchCity + "&appid=" + apiKey + "&units=imperial";
    
        $.ajax({
            url: queryURL1,
            method: "GET"
        }).then(function(response){
            var lat= response.coord.lat;
            var lon= response.coord.lon;
            var queryUV= "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
            $.ajax({
                url: queryUV,
                method: "GET"
            }).then(function(data){
                console.log(response);
                console.log(data);
                setCard(response);
                setUV(data);
            })
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
        $(temp).text("Temperature: " + input.main.temp + " °F");
        $(humid).text("Humidity: " + input.main.humidity + "%");
        $(windspeed).text("Wind Speed: " + input.wind.speed + " MPH");
    }

    function setUV(input) {
        var uv= input.value;
        $(uvIndex).html("UV Index: <span> " + uv + "</span>" );

        if (uv <= 3) {
            $("span").addClass("low");
        } else if (3 < uv && uv <= 7) {
            $("span").addClass("moderate");
        } else if (uv > 7) {
            $("span").addClass("high");
        }
    }

})


