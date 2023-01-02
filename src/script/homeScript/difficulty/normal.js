function clickNormal(easy, normal, hard) {
  easy.style.display = "none";
  normal.style.display = "none";
  hard.style.display = "none";

  buttonPlay.style.display = "block";
  buttonDifficulty.style.display = "block";
  buttonStatistics.style.display = "block";
  buttonHelp.style.display = "block";

  buttonPlay.classList.remove("home__easy", "home__hard");
  buttonDifficulty.classList.remove("home__easy", "home__hard");
  buttonStatistics.classList.remove("home__easy", "home__hard");
  buttonHelp.classList.remove("home__easy", "home__hard");
  backGroundDifficulty.classList.remove("color__easy", "color__hard");
  title.classList.remove("title__easy", "title__hard");

  buttonPlay.classList.add("home__normal");
  buttonDifficulty.classList.add("home__normal");
  buttonStatistics.classList.add("home__normal");
  buttonHelp.classList.add("home__normal");
  backGroundDifficulty.classList.add("color__normal");
  title.classList.add("title__normal");

  localStorage.setItem("Difficulty", "Normal");
}
