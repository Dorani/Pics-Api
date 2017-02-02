$(document).ready(function(){   //to make sure js code doesn't run before html is fully loaded
  $('button').click(function(){
    $("button").removeClass("selected"); //remove highlight after click event
    $(this).addClass("selected");
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();// refers to button clicked, using method "text" dog when dog is clicked etc..
    var flickOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data){

    }
    $.getJSON(flickerAPI, flickOptions, displayPhotos);
  });
})
//event handler, when button is clicked, program runs, 3 buttons, cat dog and moose
//click method, another handler function, runs each time the buttons is clicked
//callback function for click event
//add a new class on clicked button
//$this is a way to indicate the element that responds to the clicked event
//$this refers to button


//Ok, now we need to send an ajax request whenever a person clicks on a button:
//so we will put the programing inside the click event
//we will use .getJSON method that will take the following arguments
//url to resource, the data we want to send along with the url, a callback function when flickr responds
//flickerAPI, i added query string at the end to tell flickr we are making a json p request
//it allows you get around the security limitation
// data: when button is clicked we need diff data, per button type click, dog cat moose.
//url set, data in place, now we need a callback function displayPhotos
//function takes in 1 argument, data, which represents json data returned by jquery
//jquery parsed the data
