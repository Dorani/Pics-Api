$(document).ready(function(){   //to make sure js code doesn't run before html is fully loaded
  $('button').click(function(){
    $("button").removeClass("selected"); //remove highlight after click event
    $(this).addClass("selected");
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
