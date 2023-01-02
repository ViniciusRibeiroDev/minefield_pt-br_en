function clickHard(easy, normal, hard) {
  easy.style.display = "none";
  normal.style.display = "none";
  hard.style.display = "none";

  buttonPlay.style.display = "block";
  buttonDifficulty.style.display = "block";
  buttonStatistics.style.display = "block";
  buttonHelp.style.display = "block";

  buttonPlay.classList.remove("home__easy", "home__normal");
  buttonDifficulty.classList.remove("home__easy", "home__normal");
  buttonStatistics.classList.remove("home__easy", "home__normal");
  buttonHelp.classList.remove("home__easy", "home__normal");
  backGroundDifficulty.classList.remove("color__easy", "color__normal");
  title.classList.remove("title__easy", "title__normal");

  buttonPlay.classList.add("home__hard");
  buttonDifficulty.classList.add("home__hard");
  buttonStatistics.classList.add("home__hard");
  buttonHelp.classList.add("home__hard");
  backGroundDifficulty.classList.add("color__hard");
  title.classList.add("title__hard");

  localStorage.setItem("Difficulty", "Hard");
}
