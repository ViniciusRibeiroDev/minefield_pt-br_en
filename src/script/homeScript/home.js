/* Aplica os eventos de click nos botões da home. */

import { clickEasy } from "./difficulty/easy.js";
import { clickNormal } from "./difficulty/normal.js";
import { clickHard } from "./difficulty/hard.js";
import { localStorageFunction } from "./rederLocalStorageDifficult.js";

const buttonPlay = document.querySelector(".play");
const buttonDifficulty = document.querySelector(".difficulty");
const buttonStatistics = document.querySelector(".statistics");
const buttonHelp = document.querySelector(".help");
const buttonEasy = document.querySelector(".home__easy");
const buttonNormal = document.querySelector(".home__normal");
const buttonHard = document.querySelector(".home__hard");

let difficulty = () => {
  buttonDifficulty.addEventListener("click", () => {
    buttonEasy.style.display = "block";
    buttonNormal.style.display = "block";
    buttonHard.style.display = "block";

    buttonPlay.style.display = "none";
    buttonDifficulty.style.display = "none";
    buttonStatistics.style.display = "none";
    buttonHelp.style.display = "none";

    buttonEasy.addEventListener("click", () => {
      clickEasy(buttonEasy, buttonNormal, buttonHard);
    });
    buttonNormal.addEventListener("click", () => {
      clickNormal(buttonEasy, buttonNormal, buttonHard);
    });
    buttonHard.addEventListener("click", () => {
      clickHard(buttonEasy, buttonNormal, buttonHard);
    });
  });
};

let statistics = () => {
  buttonStatistics.addEventListener("click", () =>
    alert("Função não adicionada!")
  );
};

let help = () => {
  buttonHelp.addEventListener("click", () => alert("Função não adicionada!"));
};

difficulty();
statistics();
help();
localStorageFunction(buttonEasy, buttonNormal, buttonHard);
