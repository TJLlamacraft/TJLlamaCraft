$(document).ready(function () {
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      $("#Profile-Buttons").hide();
    } else {
      $("#Profile-Buttons").show();
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 765px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
  //#region Button Animations / Hover Events

  //Project 1 Mouse ENTER
  $("#Project1").mouseenter(function () {
    $("#Project1").animate({
      scale: "1.1",
    });

    $("#Project1 .Project-Name").animate({
      marginTop: "7vw",
    });
  });

  //Project 2 Mouse ENTER
  $("#Project2").mouseenter(function () {
    $("#Project2").animate({
      scale: "1.1",
    });

    $("#Project2 .Project-Name").animate({
      marginTop: "7vw",
    });
  });

  //Project 3 Mouse ENTER
  $("#Project3").mouseenter(function () {
    $("#Project3").animate({
      scale: "1.1",
    });

    $("#Project3 .Project-Name").animate({
      marginTop: "7vw",
    });
  });

  //Project 1 Mouse LEAVE
  $("#Project1").mouseleave(function () {
    $("#Project1").animate({
      scale: "1",
    });

    $("#Project1 .Project-Name").animate({
      marginTop: "31vw",
    });
  });

  //Project 2 Mouse LEAVE
  $("#Project2").mouseleave(function () {
    $("#Project2").animate({
      scale: "1",
    });

    $("#Project2 .Project-Name").animate({
      marginTop: "31vw",
    });
  });

  //Project 3 Mouse LEAVE
  $("#Project3").mouseleave(function () {
    $("#Project3").animate({
      scale: "1",
    });

    $("#Project3 .Project-Name").animate({
      marginTop: "31vw",
    });
  });

  //#endregion

  //#region OnClick Events
  $("#Projects-Button").click(function () {
    window.location.href = "portfolio.html";
  });

  let exitButton = $(".Exit-Button");
  let currentProjetPanel = null;

  //Project Panels
  const ProjectPanels = [
    $("#Project-Panel-1"),
    $("#Project-Panel-2"),
    $("#Project-Panel-3"),
    $("#Project-Panel-4"),
    $("#Project-Panel-5"),
    $("#Project-Panel-6"),
  ];

  ProjectPanels.forEach((element) => {
    element.hide();
  });
  //gonna do a set active situation. When the img is pressed, the panel opens, if any area outside of the panel is pressed, the panel closes? That or there is a button to close it.
  //need to make sure that it gets done automatically based on the project name/ number in order or smth, probs using a for loop

  $(".Caption-Button").click(function (event) {
    for (let i = 0; i < ProjectPanels.length; i++) {
      if (event.target.id === `Caption-Button-${i + 1}`) {
        console.log(`Open project panel ${i + 1}`);
        currentProjetPanel = ProjectPanels[i];
        ProjectPanels[i].show();
        $(".carousel-control").hide();
        $("#myCarousel").carousel("pause");
      }
    }
  });

  exitButton.click(function () {
    currentProjetPanel.hide();
    $(".carousel-control").show();
    $("#myCarousel").carousel({
      interval: 8000,
    });
  });

  $("#LinkedInButton").click(() => {
    window.open(
      "https://www.linkedin.com/in/tia-leoni-joseph-984243365/",
      "_blank",
    );
  });

  $("#ItchButton").click(() => {
    window.open("https://tjllemacraft.itch.io/", "_blank");
  });

  $("#InstaButton").click(() => {
    window.open("https://www.instagram.com/tjllamacraft/", "_blank");
  });

  

  //#endregion
});
