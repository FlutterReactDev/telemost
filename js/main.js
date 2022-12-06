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

  if ($(window).width() <= 768) {
    $(".nodone").css({ height: 750 });
  }

  $(".nodone-button").click(function () {
    $(".nodone-top").fadeOut();
    $(".nodone").animate({ height: $(".nodone").get(0).scrollHeight }, 150);
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

/*tarif cacl*/

function tarifCalc(
  el,
  startPrice,
  technicalSupport,
  perMembersPrice,
  counterStart = 3,
  counterPerMembers = 1,
  counterMax,
  subscription = false,
  perPrice = []
) {
  const price = `${el} .dostup-border-price2 .tarif-price`;
  let subValue = 0;
  let count = 0;
  $(price).text(numberWithSpaces(startPrice));

  if (technicalSupport) {
    $(`${el} .dostup-border-tgl input`).on("change", function (e) {
      if ($(`${el} .dostup-border-tgl input`).is(":checked")) {
        $(`${el} .dostup-border-price-absolute`).show(100)
        calc(price, 50000);
      } else {
        $(`${el} .dostup-border-price-absolute`).hide(100)
        calc(price, -50000);
      }
    });
  }
  if (subscription) {
    const checkboxes = document.querySelectorAll(`${el} .checkbox-main input`);
    $(checkboxes[checkboxes.length - 1]).prop("checked", true);
    subValue = numberWithSpaces(
      parseInt($(checkboxes[checkboxes.length - 1]).val())
    );
    perMembersPrice = perPrice[perPrice.length - 1];

    $(price).text(subValue);

    $(`${el} .checkbox-main input`).on("change", function (e) {
      console.log(parseInt(deleteSpaces($(price).text())), parseInt(subValue));
      $(price).text(
        numberWithSpaces(
          parseInt(deleteSpaces($(price).text())) -
            parseInt(deleteSpaces(subValue)) +
            parseInt(e.target.value)
        )
      );

      $(price).text(
        numberWithSpaces(
          parseInt(deleteSpaces($(price).text())) -
            count * perMembersPrice +
            parseInt(count * perPrice[$(e.target).data("id")])
        )
      );

      subValue = numberWithSpaces(parseInt(e.target.value));
      perMembersPrice = perPrice[$(e.target).data("id")];
    });
  }

  function onClick(type) {
    if (type == "minus") {
      calc(price, -perMembersPrice);
      count--;
    } else {
      calc(price, perMembersPrice);
      count++;
    }
  }

  counter(
    `${el} .dostup-border-inner-wrap`,
    counterPerMembers,
    onClick,
    counterStart,
    counterMax
  );
}

function calc(el, num1) {
  const sum = $(el).text();

  $(el).text(numberWithSpaces(parseInt(deleteSpaces(sum)) + num1));
}
function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function deleteSpaces(str) {
  return str.replace(/\s/g, "");
}
function counter(el, perMembers, onClick, start, max) {
  let value = start;
  const content = `${el} .dostup-border-number2`;
  const minus = `${el} .dostup-border-border.minus`;
  const plus = `${el} .dostup-border-border.plus`;

  $(content).text(start);

  if (value <= start) {
    $(minus).css({ display: "none" });
  } else {
    $(minus).css({ display: "block" });
  }

  $(minus).click(function () {
    value -= perMembers;
    if (value < max) {
      $(plus).css({ display: "block" });
    }
    if (value <= start) {
      $(content).text(start);
      $(minus).css({ display: "none" });
      onClick("minus");
    } else {
      $(content).text(value);
      $(minus).css({ display: "block" });

      onClick("minus");
    }
  });

  $(plus).click(function () {
    value += perMembers;
    $(minus).css({ display: "block" });
    if (value >= max) {
      onClick("plus");
      $(content).text(max);
      $(plus).css({ display: "none" });
    } else {
      $(content).text(value);
      $(plus).css({ display: "block" });

      onClick("plus");
    }
  });
}

tarifCalc(".tarif-2", 24000, true, 8000, 3, 1, 200);
tarifCalc(".tarif-9", 24000, true, 8000, 3, 1, 200);
tarifCalc(".tarif-8", 126000, true, 22000, 3, 1, 200);
tarifCalc(".tarif-3", 126000, true, 22000, 3, 1, 200);
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
tarifCalc(
  ".tarif-6",
  4800,
  false,
  1770,
  10,
  5,
  200,
  true,
  [1560, 1326, 1170]
);
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
      CPU: `4 ядра 3.2GHz и выше.
      Intel Core i3/i5/i7,
      Intel Xeon, AMD Ryzen
      Оперативная память`,
      RAM: `8 GB и более`,
      HDD: `не менее 20 GB
      свободного пространства`,
      operatingSystem: `Linux, Windows (с использованием виртуализированной среды)`,
    },
    50: {
      CPU: `6 ядер 3.2GHz и выше.
      Intel Core i5/i7, Intel Xeon, AMD Ryzen
      `,
      RAM: `16 GB и более`,
      HDD: `не менее 20 GB
      свободного пространства`,
      operatingSystem: `Linux, Windows (с использованием виртуализированной среды)`,
    },
    100: {
      CPU: `8 ядер 3.2GHz и выше.
      Intel Core i7/i9, Intel Xeon, AMD Ryzen
      `,
      RAM: `32 GB и более`,
      HDD: `не менее 20 GB
      свободного пространства`,
      operatingSystem: `Linux, Windows (с использованием виртуализированной среды)`,
    },
    200: {
      CPU: `16 ядер 3.2GHz и выше. Intel Core i7/i9, Intel Xeon, AMD Ryzen`,
      RAM: `32 GB и более`,
      HDD: `не менее 20 GB
      свободного пространства`,
      operatingSystem: `Linux, Windows (с использованием виртуализированной среды)`,
    },
  };

  $(".server-subtitle span").text(0.5);

  $(".raschet-chekbox input").eq(0).prop("checked", true);
  let counterStart = 1;
  let counterMax = 100;
  let counterValue = counterStart;
  $('.raschet-top-button button').click(function() {
    $(".raschet-border__inner").slideUp(100);
    counterValue = counterStart
    $(".raschet-skolko-number").text(counterValue);
    $(".raschet-chekbox input").eq(0).prop("checked", true);
  })
  $(".raschet-skolko-number").text(counterValue);

  $(".raschet-skolko-znak.minus").click(function () {
    counterValue--;
    if (counterValue <= counterStart) {
      counterValue = counterStart;
    }

    $(".raschet-skolko-number").text(counterValue);
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
    $(".raschet-border__inner").slideDown(100);
    let value;
    let filter;

    if (counterValue <= 25) {
      filter = filters[25];
    } else if (counterValue > 25 && counterValue <= 50) {
      filter = filters[50];
    } else if (counterValue > 50 && counterValue <= 100) {
      filter = filters[100];
    } else {
      filter = filters[200];
    }
    const checkboxes = document.querySelectorAll(".raschet-chekbox input");
    checkboxes.forEach((el) => {
      if ($(el).is(":checked")) {
        value = quality[$(el).val()];
      }
    });

    $(".user-suptitle").text(value.value);
    $(".server-subtitle span").text(counterValue * value.size);
    $(".operation-system-subtitle").text(filter.operatingSystem);
    $(".cpu-subtitle").text(filter.CPU);
    $(".hdd-subtitle").text(filter.HDD);
    $(".ram-subtitle").text(filter.RAM);
  }
}
