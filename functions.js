$(document).ready(function () {
  function createBubble() {
    var size = Math.random() * 30 + 50; // Size range in random
    var colorArray = ["pink", "violet", "orange", "skyblue", "yellow"];
    var color = colorArray[Math.floor(Math.random() * colorArray.length)]; // Randomized color
    var left = Math.random() * $(".effect").width(); // Randomized position

    var bubble = $('<div class="bubble"></div>').css({
      width: size + "px",
      height: size + "px",
      backgroundColor: color,
      left: left + "px",
    });

    $(".effect").append(bubble); // Adding a bubble

    bubble.one("animationend", function () {
      $(this).remove(); // Removes ubbles when the animation is over.
    });
  }

  setInterval(createBubble, 300);
});
