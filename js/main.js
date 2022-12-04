$(document).ready(function () {
  new Quiz(document.querySelector(".nodone-block"));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  $(".dannye-sl").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 416,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  });

  let percentTime;
  let tick;
  let time = 0.1;
  let progressBarIndex = 0;

  $(".progressBarContainer .progressBar").each(function (index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
  });

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 5);

    $(".inProgress" + progressBarIndex)
      .parent()
      .parent()
      .addClass("active");
  }

  function interval() {
    if (
      $(
        '.dannye-sl .slick-track div[data-slick-index="' +
          progressBarIndex +
          '"]'
      ).attr("aria-hidden") === "true"
    ) {
      progressBarIndex = $(
        '.dannye-sl .slick-track div[aria-hidden="false"]'
      ).data("slickIndex");

      startProgressbar();
    } else {
      percentTime += 1 / (time + 5);
      $(".inProgress" + progressBarIndex).css({
        width: percentTime + "%",
      });

      if (percentTime >= 100) {
        $(".dannye-sl").slick("slickNext");
        progressBarIndex++;
        if (progressBarIndex > 2) {
          progressBarIndex = 0;
        }
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $(".progressBarItem").removeClass("active");
    $(".inProgress").css({
      width: 0 + "%",
    });
    clearInterval(tick);
  }
  startProgressbar();

  $(".progressBarContainer .progressBarItem").click(function () {
    clearInterval(tick);
    const goToThisIndex = $(this).find("span").data("slickIndex");
    $(".dannye-sl").slick("slickGoTo", goToThisIndex, false);
    startProgressbar();
  });

  $(".dannye-border-sl").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 416,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".table-inner").css({ display: "none" });
  $(".table-button").click(function () {
    $(".table-arrow").toggleClass("hide");
    $(".table-button").toggleClass("hide");
    if ($(".table-button").hasClass("hide")) {
      $(".table-button button").text("Развернуть таблицу");
    } else {
      $(".table-button button").text("Свернуть таблицу");
    }
    if ($(window).width() <= 480) {
      $(".tablemb-inner .tablemb-inner-wrap").animate({
        height: "toggle",
      });
    } else {
      $(".table-inner").animate({
        height: "toggle",
      });
    }
  });

  const tablembTitle = ["Корпоративный", "Доступный", "Облачный", "Вебинар"];
  $(".tablemb-inner").slick({
    prevArrow: document.querySelector(".tablemb-arrow--left"),
    nextArrow: document.querySelector(".tablemb-arrow--right"),
    swipe: false,
  });

  $(".tablemb-inner").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".tablemb-title").fadeOut(200, () => {
        $(".tablemb-title").text("").text(tablembTitle[nextSlide]).fadeIn(200);
      });
    }
  );

  if ($(window).width() <= 768) {
    $(".nodone").css({ height: 750 });
  }

  $(".table-show").click(function () {
    $(".table-show").toggleClass("show");
    $(".table-shadow").toggleClass("hide");
  });
  $(".nodone-button").click(function () {
    $(".nodone-top").remove();
    $(".nodone").animate({ height: $(".nodone").get(0).scrollHeight }, 150);
    $(".nodone-border").css({ pointerEvents: "auto" });
    $(".nodone-shadow").remove();
  });
});

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".mt-mobile");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  body.classList.toggle("body-open");
  burger.classList.toggle("burger-open");
});

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
