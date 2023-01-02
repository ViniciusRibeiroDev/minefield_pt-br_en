const localStorageDifficulty = localStorage.getItem("Difficulty");

if (localStorageDifficulty === "Easy") {
  clickEasy(buttonEasy, buttonNormal, buttonHard);
} else if (localStorageDifficulty === "Normal") {
  clickNormal(buttonEasy, buttonNormal, buttonHard);
} else if (localStorageDifficulty === "Hard") {
  clickHard(buttonEasy, buttonNormal, buttonHard);
}
