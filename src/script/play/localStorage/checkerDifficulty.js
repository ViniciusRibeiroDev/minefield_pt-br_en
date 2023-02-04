/* Função responsável por verificar a dificuldade escolhida e renderiza o mapa apartir dela.
Se a dificuldade não for definida = fácil(Easy). */

let contFlag = 0;

function renderLocalStorageDifficulty() {
  const difficultChecker = localStorage.getItem("Difficulty");
  const body = document.querySelector(".background");
  const header = document.querySelector(".header__container");
  const campOne = document.querySelectorAll(".campOne");
  const campTwo = document.querySelectorAll(".campTwo");
  const iconFlag = document.querySelector(".icon__flag");

  if (difficultChecker === null) {
    localStorage.setItem("Difficulty", "Easy");
  }

  console.log(difficultChecker);

  if (difficultChecker === "Easy") {
    body.classList.add("color__easy");
    header.classList.add("header--easy");

    campOne.forEach((one) => one.classList.add("campOne--easy"));
    campTwo.forEach((two) => two.classList.add("campTwo--easy"));
    iconFlag.src = "../img/red-flag-removebg-preview.png";

    contFlag = 33;
  } else if (difficultChecker === "Normal") {
    body.classList.add("color__normal");
    header.classList.add("header--normal");

    campOne.forEach((one) => one.classList.add("campOne--normal"));
    campTwo.forEach((two) => two.classList.add("campTwo--normal"));
    iconFlag.src = "../img/orange_flag.png";
    iconFlag.classList.add("flag--normal");

    contFlag = 40;
  } else if (difficultChecker === "Hard") {
    body.classList.add("color__hard");
    header.classList.add("header--hard");

    campOne.forEach((one) => one.classList.add("campOne--hard"));
    campTwo.forEach((two) => two.classList.add("campTwo--hard"));
    iconFlag.src = "../img/blue_flag.png";
    contFlag = 60;
  }
}

renderLocalStorageDifficulty();
