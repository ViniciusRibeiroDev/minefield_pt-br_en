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
      const divDefend = document.createElement("div");
      const h1Defend = document.createElement("h1");

      h1Defend.innerText = "Você Perdeu!";

      h1Defend.classList.add("title__defend");
      divDefend.classList.add("defend");

      imgBombSelect[index].style.display = "flex";

      divDefend.appendChild(h1Defend);
      body.appendChild(divDefend);
    }
  });
}

clickGame();
