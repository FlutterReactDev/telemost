class Quiz {
  constructor(stepContainer) {
    this.quiz = [
      {
        id: 1,
        content: `
        <div class="nodone-border-block">
                <div class="nodone-border-suptitle">
                  Укажите тип Вашего бизнеса
                </div>
                <form>
                <div class="nodone-border-chekbox">
                <label class="checkbox-main">
                  <input type="radio" name="1" value=" Малый и средний бизнес">
                    <div class="chekbox-title" >
                      Малый и средний бизнес
                    </div> 
                  <span class="checkbox"></span>
                </label>
              </div>
              <div class="nodone-border-chekbox">
                <label class="checkbox-main">
                  <input type="radio" name="1" value="Крупная компания, корпоративный сегмент">
                    <div class="chekbox-title">
                      Крупная компания, корпоративный сегмент
                    </div> 
                  <span class="checkbox"></span>
                </label>
              </div>
              <div class="nodone-border-chekbox">
                <label class="checkbox-main">
                  <input type="radio" name="1" value="Другое">
                    <div class="chekbox-title">
                      Другое
                    </div> 
                  <span class="checkbox"></span>
                </label>
              </div></form>
               
              </div>
              <div class="nodone-border-block">
                <div class="nodone-border-suptitle">
                  Укажите направление Вашего бизнеса
                </div>
                <div class="nodone-border-input">
                  <input type="text" size="40" placeholder="Например, нефтегазодобывающее предприятие">
                </div>
              </div>
        `,
        title: "Шаг 1. Тип бизнеса",
        button: `<button>Далее - Шаг 2</button>`,
        steps: ` <div class="nodone-border-right-title">
        <img src="images/nodone-border-right-title.svg" alt="">
        Шаг 1
      </div>
      <div class="nodone-border-right-arrow">
        <img src="images/nodone-border-right-arrow.svg" alt="">
      </div>
      <div class="nodone-border-right-title2">
        <div class="nodone-border-right-elipse"></div>
        Шаг 2
      </div>
      <div class="nodone-border-right-arrow">
        <img src="images/nodone-border-right-arrow.svg" alt="">
      </div>
      <div class="nodone-border-right-title2">
        <div class="nodone-border-right-elipse"></div>
        Шаг 3
      </div>`,
        answers: {
          typeOfBusiness: "",
          directionOfYourBusiness: "",
        },
        isValid: false,
      },
      {
        id: 2,
        content: `
        <div class="nodone-border-block">
        <div class="nodone-border-suptitle">
          Необходимое качество
        </div>
        <div class="nodone-border-inner">
          <div class="nodone-border-chekbox2">
            <label class="checkbox-main">
              <input type="radio" name="1" value="Хорошее (640х360)">
                <div class="chekbox-title">
                  Хорошее (640х360)
                </div> 
              <span class="checkbox"></span>
            </label>
          </div>
          <div class="nodone-border-chekbox2">
            <label class="checkbox-main">
              <input type="radio" name="1" value="HD (1280x720)">
                <div class="chekbox-title">
                  HD (1280x720)
                </div> 
              <span class="checkbox"></span>
            </label>
          </div>
          <div class="nodone-border-chekbox2">
            <label class="checkbox-main">
              <input type="radio" name="1" value="FULL HD (1920x1080)">
                <div class="chekbox-title">
                  FULL HD (1920x1080)
                </div> 
              <span class="checkbox"></span>
            </label>
          </div>
        </div>
        
        
        
      </div>
      <div class="nodone-border-block">
        <div class="nodone-border-suptitle">
          Количество участников
        </div>
        <div class="nodone-border-skolko">
          <div class="nodone-border-skolko-znak minus">-</div>
          <div class="nodone-border-skolko-number">15</div>
          <div class="nodone-border-skolko-znak plus">+</div>
        </div>
      </div>
      <div class="nodone-border-block">
        <div class="nodone-border-inner2">
          <div class="nodone-border-suptitle2">
            Расширенная техподдержка
          </div>
          <div class="nodone-border-tgl">
            <input class="tgl3 tgl-ios3" id="cb4" type="checkbox">  

            <label class="tgl-btn3" for="cb4"></label>
          </div>
          <div class="nodone-border-link">
            <a href="#">
              Подробнее о поддержке
              <img src="images/nodone-border-link.svg" alt="">
            </a>
          </div>
        </div>
      </div>
        `,
        title: "Шаг 2. Технические требования",
        button: `<button>Далее - Шаг 3</button>`,
        steps: `<div class="nodone-border-right-title3">
        <img src="images/nodone-border-right-title2.svg" alt="">
        Шаг 1
      </div>
      <div class="nodone-border-right-arrow">
        <img src="images/nodone-border-right-arrow2.svg" alt="">
      </div>
      <div class="nodone-border-right-title">
        <img src="images/nodone-border-right-title.svg" alt="">
        Шаг 2
      </div>
      <div class="nodone-border-right-arrow">
        <img src="images/nodone-border-right-arrow.svg" alt="">
      </div>
      <div class="nodone-border-right-title2">
        <div class="nodone-border-right-elipse"></div>
        Шаг 3
      </div>`,
        answers: {
          requiredQuality: "",
          numberOfparticipants: "15",
          extendedTechnicalSupport: false,
        },
      },
      {
        id: 3,
        title: "Шаг 3. Результаты",
        content: `
        <div class="nodone-border-block">
        <div class="nodone-border-suptitle3">
          Вам подходят тарифные планы:
        </div>
        <div class="nodone-border-inner">
          <div class="nodone-border-border">
            <div class="nodone-border-border-title">
              Доступный
              <img src="images/nodone-border-border-title.svg" alt="">
            </div>
            <div class="nodone-border-border-suptitle">
              Серверное решение
            </div>
          </div>
          <div class="nodone-border-border">
            <div class="nodone-border-border-title">
              Корпоративный
              <img src="images/nodone-border-border-title2.svg" alt="">
            </div>
            <div class="nodone-border-border-suptitle">
              Серверное решение
            </div>
          </div>
        </div>

      </div>
      <div class="nodone-border-text">
        Отправьте заявку, и мы свяжемся с Вами для уточнения деталей!
      </div>
      <div class="nodone-border-wrap2">
        <div class="nodone-border-wrap2-block">
          <div class="nodone-border-wrap2-title">
            Ваше имя
          </div>
          <div class="nodone-border-wrap2-input">
            <input class="input-name" type="text" size="40" placeholder="Например, Иван">
          </div>
        </div>
        <div class="nodone-border-wrap2-block">
          <div class="nodone-border-wrap2-title">
            Номер Вашего телефона
          </div>
          <div class="nodone-border-wrap2-input">
            <input class="input-phone" type="text" size="40" placeholder="+7">
          </div>
        </div>
        <div class="nodone-border-wrap2-block">
          <div class="nodone-border-wrap2-title">
            Ваш Email
          </div>
          <div class="nodone-border-wrap2-input">
            <input class="input-email" type="text" size="40" placeholder="example@mail.ru">
          </div>
        </div>
      </div>`,
        button: `
        <div class="nodone-border-bottom">
              <div class="nodone-border-bottom-title nodone-border-bottom-title-dp">
                Нажимая “Отправить”, я подтвержаю своё согласие на обработку персональных данных
              </div>
              <div class="nodone-border-bottom-button">
                <button>
                  Завершить и отправить
                  <img src="images/nodone-border-bottom-button.svg" alt="">
                </button>
              </div>
              <div class="nodone-border-bottom-title nodone-border-bottom-title-mb">
                Нажимая “Отправить”, я подтвержаю своё согласие на обработку персональных данных
              </div>
            </div>
      `,
        steps: `<div class="nodone-border-right-title3">
      <img src="images/nodone-border-right-title2.svg" alt="">
      Шаг 1
    </div>
    <div class="nodone-border-right-arrow">
      <img src="images/nodone-border-right-arrow2.svg" alt="">
    </div>
    <div class="nodone-border-right-title3">
      <img src="images/nodone-border-right-title2.svg" alt="">
      Шаг 2
    </div>
    <div class="nodone-border-right-arrow">
      <img src="images/nodone-border-right-arrow2.svg" alt="">
    </div>
    <div class="nodone-border-right-title3">
      <img src="images/nodone-border-right-title2.svg" alt="">
      Шаг 3
    </div>`,
        answers: {
          tariff: "",
          name: "",
          phone: "",
          email: "",
        },
      },
    ];
    this.steps = this.quiz.length;
    this.stepContainer = stepContainer;
    this.activeQuiz = 1;
    this.quizContent = document.querySelector(".nodone-border-content");
    this.nextBtn = document.querySelector(".nodone-border-button");

    this.quizTitle = document.querySelector(".nodone-border-title span");
    this.stepsItems = document.querySelector(".nodone-border-right");
    this.init();
  }

  init() {
    this.appendNodone(this.activeQuiz);
    this.nextBtn.addEventListener("click", () => {
      this.onChangeQuiz();
    });
  }

  onChangeQuiz() {
    let isValid = false;
    if (this.activeQuiz == 1) {
      const checkboxes = document.querySelectorAll(
        ".nodone-border-chekbox label input"
      );
      const input = document.querySelector(".nodone-border-input input");
      checkboxes.forEach((el) => {
        if ($(el).is(":checked")) {
          isValid = true;
          this.quiz[0].answers.typeOfBusiness = $(el).val();
        } else {
          isValid = false;
        }
      });
      if (input.value) {
        this.quiz[0].answers.directionOfYourBusiness = input.value;
        isValid = true;
      } else {
        isValid = false;
      }
    }

    if (this.activeQuiz == 2) {
      const checkboxes = document.querySelectorAll(
        ".nodone-border-chekbox2 label input"
      );

      const number = $(".nodone-border-skolko-number").text();
      const option = document.querySelector(".nodone-border-tgl input");
      checkboxes.forEach((el) => {
        if ($(el).is(":checked")) {
          this.quiz[1].answers.requiredQuality = $(el).val();
        }
      });
      this.quiz[1].answers.numberOfparticipants = number;
      if ($(option).is(":checked")) {
        this.quiz[1].answers.extendedTechnicalSupport = true;
      } else {
        this.quiz[1].answers.extendedTechnicalSupport = false;
      }
      if (
        this.quiz[1].answers.requiredQuality &&
        this.quiz[1].answers.numberOfparticipants
      ) {
        isValid = true;
      }
    }

    if (this.activeQuiz == 3) {
      const phoneInput = $(".input-phone").val();
      const nameInput = $(".input-name").val();
      const emailInput = $(".input-email").val();

      const validateInputs = () => {
        let isValid = false;
        if (phoneInput && nameInput && emailInput) {
          this.quiz[2].answers.name = nameInput;
          this.quiz[2].answers.phone = phoneInput;
          this.quiz[2].answers.emailInput = emailInput;
          isValid = true;
        }
        return isValid;
      };
      if (this.quiz[2].answers.tariff && validateInputs()) {
        isValid = true;
      }
    }

    if (isValid) {
      this.activeQuiz = this.activeQuiz + 1;
      this.appendNodone(this.activeQuiz);
    }
  }

  appendNodone(id) {
    $(this.quizTitle).fadeOut(200, () => {
      $(this.quizTitle)
        .text("")
        .text(this.quiz[id - 1].title)
        .fadeIn(200);
    });
    $(this.stepsItems)
      .text("")
      .append(this.quiz[id - 1].steps);
    $(this.quizContent).fadeOut(200, () => {
      this.changeQuizContent(id);
      $(this.quizContent).fadeIn(200);
    });

    if (id == 3) {
      $(".nodone-border").append(this.quiz[2].button);
      $(".nodone-border-bottom-button").click(this.onComplete);
      $(this.nextBtn).remove();
    } else {
      $(this.nextBtn).text("");
      $(this.nextBtn).append(this.quiz[id - 1].button);
    }
  }

  changeQuizContent(id) {
    $(this.quizContent).text("");
    $(this.quizContent).append(this.quiz[id - 1].content);

    if (id == 2) {
      const minus = document.querySelector(".nodone-border-skolko-znak.minus");
      const plus = document.querySelector(".nodone-border-skolko-znak.plus");
      const number = document.querySelector(".nodone-border-skolko-number");

      minus.addEventListener("click", () => {
        if (+number.textContent > 0) {
          number.textContent = +number.textContent - 1;
        }
      });

      plus.addEventListener("click", () => {
        number.textContent = +number.textContent + 1;
      });
    }

    if (id == 3) {
      const tariffs = document.querySelectorAll(".nodone-border-border");

      tariffs.forEach((el) => {
        el.addEventListener("click", () => {
          const tariffName = $(el.querySelector(".nodone-border-border-title"))
            .text()
            .trim();
          this.quiz[2].answers.tariff = tariffName;
        });
      });
    }

    $(".input-phone").inputmask("+7(999) 999-99-99");
  }

  getData() {
    const data = {};
    this.quiz.forEach((el) => {
      data[el.id] = el.answers;
    });
    return data;
  }

  onComplete = () => {
    const phoneInput = $(".input-phone").val();
    const nameInput = $(".input-name").val();
    const emailInput = $(".input-email").val();

    const validateInputs = () => {
      let isValid = false;
      if (phoneInput && nameInput && emailInput) {
        this.quiz[2].answers.name = nameInput;
        this.quiz[2].answers.phone = phoneInput;
        this.quiz[2].answers.emailInput = emailInput;
        isValid = true;
      }
      return isValid;
    };
    if (this.quiz[2].answers.tariff && validateInputs()) {
      console.log(this.getData());
    }
    
    
  };
}
