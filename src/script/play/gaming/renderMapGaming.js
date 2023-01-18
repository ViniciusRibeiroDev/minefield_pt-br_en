/* funções responsaveis por fazer uma renderização geral dos elementos do  mapa (exceção da bandeira): 
Click, números e bombas */

let contClick = 0;

function clickGame() {
  const buttonsClick = document.querySelectorAll(".button");

  buttonsClick.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.querySelector(".flag") === null) {
        if (button.classList.value.includes("campOne")) {
          button.classList.add("campTree");
        } else if (button.classList.value.includes("campTwo")) {
          button.classList.add("campFour");
        }
        contClick++;
        renderBomb();
        for (let i = 0; i < 15; i++) {
          indexXY();
        }
        renderNumbers();
        clickCont();
      }
    });
  });
}

function renderNumbers() {
  const divNumbersSelect = document.querySelectorAll(".number");
  const numberSelect = document.querySelectorAll(".number > p");

  let indexS = [];

  numberSelect.forEach((number, index) => {
    if (number.innerText === "1") {
      number.classList.add("one");
    } else if (number.innerText === "2") {
      number.classList.add("two");
    } else if (number.innerText === "3") {
      number.classList.add("tree");
    } else if (number.innerText === "4") {
      number.classList.add("four");
    } else if (number.innerText === "5") {
      number.classList.add("five");
    } else if (number.innerText === "6") {
      number.classList.add("six");
    } else if (number.innerText === "7") {
      number.classList.add("seven");
    } else if (number.innerText === "8") {
      number.classList.add("eight");
    }
    indexS.push(index);
  });

  divNumbersSelect.forEach((div, index) => {
    if (
      div.classList.value.includes("campTree") ||
      div.classList.value.includes("campFour")
    ) {
      numberSelect[indexS[index]].style.display = "flex";
    }
  });
}

function renderBomb() {
  const bombSelect = document.querySelectorAll(".bomb");
  const imgBombSelect = document.querySelectorAll(".bombRender");

  bombSelect.forEach((bomb, index) => {
    if (
      bomb.classList.value.includes("campTree") ||
      bomb.classList.value.includes("campFour")
    ) {
      const body = document.querySelector("body");
      const imgEmoji = document.querySelector("img.icons")

      document.body.insertAdjacentHTML(
        "beforeend",
        `
        <div class="defeat">
          <div class="defeat__modal">
            <h1 class="title__defeat">Você Perdeu!</h1>
            <div class="buttons__defeat">
              <button class="button__close close__home">Sair</button>
              <button class="button__close play__again">Jogar Novamente</button>
            </div>
          </div>
        </div>
        `
      )

      const close = document.querySelector(".close__home");
      const playAgain = document.querySelector(".play__again");

      close.addEventListener("click", () => {
        window.location.replace("/")
      })

      playAgain.addEventListener("click", () => {
        window.location.replace("/src/pages/game.html")
      })

      imgEmoji.src = "../img/emoji_triste.png";

      imgBombSelect[index].style.display = "flex";


      clearInterval(timer)
    }
  });
}

clickGame();
