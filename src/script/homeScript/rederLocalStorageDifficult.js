import { clickEasy } from "./difficulty/easy.js";
import { clickNormal } from "./difficulty/normal.js";
import { clickHard } from "./difficulty/hard.js";

export function localStorageFunction(buttonEasy, buttonNormal, buttonHard) {
  const localStorageDifficulty = localStorage.getItem("Difficulty");

  if (localStorageDifficulty === "Easy") {
    clickEasy(buttonEasy, buttonNormal, buttonHard);
  } else if (localStorageDifficulty === "Normal") {
    clickNormal(buttonEasy, buttonNormal, buttonHard);
  } else if (localStorageDifficulty === "Hard") {
    clickHard(buttonEasy, buttonNormal, buttonHard);
  }
}
