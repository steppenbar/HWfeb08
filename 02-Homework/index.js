$(document).ready(function(){

    $("#submitWeather").click(function(){

var city = $("#city").val();

if(city != ""){

        $.ajax({
            
            url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city + "&units=imperial" + 
            "&APPID=970eb5654cb681faab91911895291114",
            type: "GET",
            dataType: "jasonp",
            success: function(data){
                console.log(data);
            }
        }

        )



}else{
    $("error").html("Field cannot be empty");
}

    })

});