$("document").ready(function () {
    // HUMBERGAR
    $(".mobile__bar").click(function () {
      $(this).toggleClass("active");
      $("nav").slideToggle("500");
    });
  });
  