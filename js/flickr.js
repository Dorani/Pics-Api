$(document).ready(function(){   //to make sure js code doesn't run before html is fully loaded
  $('button').click(function(){
    $("button").removeClass("selected"); //remove highlight after click event
    $(this).addClass("selected");
  });
})
//event handler, when button is clicked, program runs, 3 buttons, cat dog and moose
//click method, another handler function, runs each time the buttons is clicked
//callback function for click event
//add a new class on clicked button
//$this is a way to indicate the element that responds to the clicked event
//$this refers to button
