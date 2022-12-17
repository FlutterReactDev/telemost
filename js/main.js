$(document).ready(function () {
  new Quiz(document.querySelector(".nodone-block"));

  $(".phone-input").inputmask("+7(999) 999-99-99");
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

  /*progress slider*/
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
    tick = setInterval(interval, 12);

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

   $(".partnermargin-sl").slick({
        infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    pauseOnFocus: false,
    pauseOnHover:false,
    dots: true,
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

  /*table*/
  $(".table-inner").css({ display: "none" });
  $(".table-button").click(function () {
    $(".table-show").toggleClass("show");
    $(".table-shadow").toggleClass("hide");
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

  $(".harakter-content-inner").css({ display: "none" });
  $(".harakter-show").click(function () {
    $(".harakter-show").toggleClass("show");
    $(".harakter-shadow").toggleClass("hide");
    $(".harakter-arrow").toggleClass("hide");
    $(".harakter-button").toggleClass("hide");
    if ($(".harakter-button").hasClass("hide")) {
      $(".harakter-button button").text("Развернуть таблицу");
    } else {
      $(".harakter-button button").text("Свернуть таблицу");
    }
    $(".harakter-content-inner").animate({
      height: "toggle",
    });
  });

  if ($(window).width() <= 768) {
    $(".nodone").css({ height: 750 });
  }

  $(".nodone-button").click(function () {
    $(".nodone-top").fadeOut();
    $(".nodone").animate(
      { height: $(".nodone").get(0).scrollHeight },
      150,
      function () {
        $(".nodone").css({ height: "auto" });
      }
    );
    $(".nodone-border").css({ pointerEvents: "auto" });
    $(".nodone-shadow").fadeOut();
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

const items2 = document.querySelectorAll(".item2");

items2.forEach((item2) => {
  item2.addEventListener("click", () => {
    item2.classList.toggle("open");
  });
});

/*tarif cacl*/

tarifCalc(".tarif-2", 24000, true, 8000, 3, 1, 200);
tarifCalc(".tarif-9", 24000, true, 8000, 3, 1, 200);
tarifCalc(".tarif-8", 126000, true, 22000, 3, 1, 200);
tarifCalc(".tarif-3", 66000, true, 22000, 3, 1, 200);
tarifCalc(".tarif-4", 4800, false, 1770, 10, 5, 200, true, [1560, 1326, 1170]);
tarifCalc(
  ".tarif-5",
  15000,
  false,
  4250,
  100,
  100,
  300,
  true,
  [5000, 4500, 4250]
);

tarifCalc(
  ".tarif-7",
  15000,
  false,
  4250,
  100,
  100,
  300,
  true,
  [5000, 4500, 4250]
);
tarifCalc(".tarif-6", 4800, false, 1770, 10, 5, 200, true, [1560, 1326, 1170]);
techCalc();

function techCalc() {
  const quality = {
    "Хорошее (640х360)": {
      size: 0.5,
      value: "512 Кбит/с",
    },
    "HD (1280x720)": {
      size: 1,
      value: "1 Мбит/с",
    },
    "FULL HD (1920x1080)": {
      size: 2,
      value: "2 Мбит/с",
    },
  };

  const filter = {
    25: {
      CPU: `4 ядра 3.2GHz и выше. Intel Core i3/i5/i7, Intel Xeon, AMD Ryzen`,
      RAM: `8 GB и более`,
      HDD: `свободного пространства не менее 20 GB`,
      operatingSystem: `Linux, Windows (с использованием виртуализированной среды)`,
    },
    50: {
      CPU: `6 ядер 3.2GHz и выше. Intel Core i5/i7, Intel Xeon, AMD Ryzen`,
      RAM: `16 GB и более`,
      HDD: `не менее 20 GB
      свободного пространства`,
      operatingSystem: `Linux, Windows (с использованием виртуализированной среды)`,
    },
    100: {
      CPU: `8 ядер 3.2GHz и выше. Intel Core i7/i9, Intel Xeon, AMD Ryzen`,
      RAM: `32 GB и более`,
      HDD: `не менее 20 GB
      свободного пространства`,
      operatingSystem: `Linux, Windows (с использованием виртуализированной среды)`,
    },
    200: {
      CPU: `от 16 ядер 3.2GHz и выше. Intel Core i7/i9, Intel Xeon, AMD Ryzen`,
      RAM: `32 GB и более`,
      HDD: `не менее 20 GB
      свободного пространства`,
      operatingSystem: `Linux, Windows (с использованием виртуализированной среды)`,
    },
  };
  let counterStart = 1;
  let counterMax = 200;
  let counterValue = counterStart;
  $(".server-subtitle span").text(0.5);
  $(".raschet-chekbox input").eq(0).prop("checked", true);
  $(".raschet-inner-border.quality .raschet-inner-text").text(
    $(".raschet-chekbox input").eq(0).val()
  );
  $(".raschet-inner-border.members .raschet-inner-text").text(
    `${counterStart} участников`
  );

  $(".raschet-top-button button").click(function () {
    $(".raschet-border__inner").slideUp(400);
    counterValue = counterStart;
    $(".raschet-skolko-number").text(counterValue);
    $(".raschet-chekbox input").eq(0).prop("checked", true);

    $(".raschet-inner-border.quality .raschet-inner-text").text(
      $(".raschet-chekbox input").eq(0).val()
    );
    $(".raschet-inner-border.members .raschet-inner-text").text(
      `${counterStart} участников`
    );
  });
  $(".raschet-skolko-number").text(counterValue);

  $(".raschet-skolko-znak.minus").click(function () {
    counterValue--;
    if (counterValue <= counterStart) {
      counterValue = counterStart;
    }

    $(".raschet-skolko-number").text(counterValue);
  });

  $(".raschet-skolko-number").on("input", function (e) {
    e.preventDefault();
    counterValue = $(e.target).text();
    if (counterValue > counterMax) {
      counterValue = counterMax;
      $(e.target).text(counterValue);
    }
 
  });

  $(".raschet-skolko-number").focusout(function (e) {
    counterValue = $(e.target).text();
    if (counterValue < counterStart) counterValue = counterStart;
    if (!counterValue) counterValue = counterStart;
    if (counterValue > counterMax) counterValue = counterMax;
    $(e.target).text(counterValue);
  });

  $(".raschet-skolko-znak.plus").click(function () {
    counterValue++;
    if (counterValue >= counterMax) {
      counterValue = counterMax;
    }

    $(".raschet-skolko-number").text(counterValue);
  });

  $(".raschet-button button").click(function () {
    calc(counterValue, quality, filter);
  });

  function calc(counterValue, quality, filters) {
    $(".raschet-border__inner").slideDown(400);

    let value;
    let filter;
    let checkboxValue;
    const checkboxes = document.querySelectorAll(".raschet-chekbox input");
    checkboxes.forEach((el) => {
      if ($(el).is(":checked")) {
        value = quality[$(el).val()];
        checkboxValue = $(el).val();
      }
    });

    $(".raschet-inner-border.quality .raschet-inner-text").text(checkboxValue);
    $(".raschet-inner-border.members .raschet-inner-text").text(
      `${counterValue} участников`
    );

    if (counterValue <= 25) {
      filter = filters[25];
    } else if (counterValue > 25 && counterValue <= 50) {
      filter = filters[50];
    } else if (counterValue > 50 && counterValue <= 100) {
      filter = filters[100];
    } else {
      filter = filters[200];
    }

    $(".user-suptitle").text(value.value);
    $(".server-subtitle span").text(counterValue * value.size);
    $(".operation-system-subtitle").text(filter.operatingSystem);
    $(".cpu-subtitle").text(filter.CPU);
    $(".hdd-subtitle").text(filter.HDD);
    $(".ram-subtitle").text(filter.RAM);
  }
}


var $log = $('#log');

function log(str) {
  $log.html($log.html() + str + '<br>');
}

$('.js-phone').inputmask({
  mask: ['+7 (999) 999-99-99', '8 999 999-99-99'],
  jitMasking: 3,
  showMaskOnHover: false,
  autoUnmask: true
});

$('.js-form').on('submit', function () {
  log('submit: ' + $(this).serialize());
  return false;
});