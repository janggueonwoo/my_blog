//Filter Js
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
  //add active to btn
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
//Header background change on scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 50);
});

$(document).ready(function () {
  var currentPosition = parseInt($(".quickmenu").css("top"));
  console.log(currentPosition);
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    $(".quickmenu")
      .stop()
      .animate({ top: position + currentPosition + "px" }, 1000);
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".btn_gotop").show();
  } else {
    $(".btn_gotop").hide();
  }
});
$(".btn_gotop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});
