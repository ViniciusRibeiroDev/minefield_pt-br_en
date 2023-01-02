function clickEasy(easy, normal, hard) {
  easy.style.display = "none";
  normal.style.display = "none";
  hard.style.display = "none";

  buttonPlay.style.display = "block";
  buttonDifficulty.style.display = "block";
  buttonStatistics.style.display = "block";
  buttonHelp.style.display = "block";

  buttonPlay.classList.remove("home__normal", "home__hard");
  buttonDifficulty.classList.remove("home__normal", "home__hard");
  buttonStatistics.classList.remove("home__normal", "home__hard");
  buttonHelp.classList.remove("home__normal", "home__hard");
  backGroundDifficulty.classList.remove("color__normal", "color__hard");
  title.classList.remove("title__normal", "title__hard");

  buttonPlay.classList.add("home__easy");
  buttonDifficulty.classList.add("home__easy");
  buttonStatistics.classList.add("home__easy");
  buttonHelp.classList.add("home__easy");
  backGroundDifficulty.classList.add("color__easy");
  title.classList.add("title__easy");

  localStorage.setItem("Difficulty", "Easy");
}
