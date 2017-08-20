$(document).ready(function() {
var userLocation ;
 var localUrl;
if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

userLocation = position.coords.latitude + "," +position.coords.longitude;
localUrl = "https://api.darksky.net/forecast/ae4fd228dfcc8369df97062a501c7ed5/" + userLocation;

 $.ajax({
  url: localUrl,
  dataType: "jsonp",
  success: function (data) {
     // alert(data.latitude);
var cTemp = ((data.currently.temperature - 32) * 5) / 9;
   var CtempF = parseFloat(cTemp).toFixed(2);
     $(function() {
    $('#celsius').change(function() {
      if ($(this).prop('checked') == true) {
        $('#temperature').html(data.currently.temperature + " F");
      } else {
        $('#temperature').html(CtempF + " C");
      }

    })
  })
    $("#temperature").html(data.currently.temperature + " F");
$("#local").html("Your Timezone is: " + data.timezone);
    var icon = data.currently.icon;
 switch(icon)  {
   case "clear-day":
     $(".wi").addClass('wi-day-sunny');
     $("body").css("background-color", "#EBFFFA");
     break;
   case "clear-night":
     $(".wi").addClass('wi-night-clear');
     $("body").css("background-color", "#1f263b");
      break;
   case "rain":
     $(".wi").addClass('wi-rain');
     $("body").css("background-color", "#A0A8BB");
      break;
   case "snow":
     $(".wi").addClass('wi-snow');
     $("body").css("background-color", "#fffafa");
      break;
   case "sleet":
     $(".wi").addClass('wi-sleet');
     $("body").css("background-color", "#d8f0ff");
      break;
   case "wind":
     $(".wi").addClass('wi-strong-wind');
     $("body").css("background-color", "#f4fbff");
      break;
   case "fog":
     $(".wi").addClass('wi-fog');
     $("body").css("background-color", "#d7d0ff");
      break;
   case "cloudy":
     $(".wi").addClass('wi-cloudy');
     $("body").css("background-color", "#DDD9D3");
      break;
   case "partly-cloudy-day":
     $(".wi").addClass('wi-day-cloudy');
     $("body").css("background-color", "#E9E7E3");
      break;
   case "partly-cloudy-night":
     $(".wi").addClass('wi-night-alt-cloudy');
     $("body").css("background-color", "#BEB5A9");
      break;
      }
  }
});
 });
 }
});
