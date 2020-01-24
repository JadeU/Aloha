document.addEventListener("DOMContentLoaded", function() {
  console.log("document is ready");

  //your code goes in this block

  /*
   *Flickity
   */

  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",

    contain: true,
    wrapAround: true
  });

  //add carousel js
  /*
   *Email Validation
   */

  const messageForm = document.querySelector(".subscribe-form");
  const messageInput = document.querySelector(".subscribe-form input");

  messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const messageValue = messageInput.value;
    if (messageValue.length <= 0) {
      alert("Please enter a valid email");
    } else {
      alert("Thanks for Subscribing!");
    }
  });
}); //end of doc ready
