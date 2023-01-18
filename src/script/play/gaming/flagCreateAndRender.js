/* Funções respossaveis por criar a bandeira e removela pelo evento de "contextmenu" 
(botão direio do mouse) e tela de vitória */

function flegCreateAndRenderAndRemove() {
  const buttonClick = document.querySelectorAll(".button");

  buttonClick.forEach((button) => {
    button.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      if (button.classList.value.includes("divFlag")) {
        if (button.childNodes[0].classList[0] === "flag") {
          button.childNodes[0].remove();
          button.classList.remove("divFlag");
        } else if (button.childNodes[1].classList[0] === "flag") {
          button.childNodes[1].remove();
          button.classList.remove("divFlag");
        }
        contFlag++;
        bomb++;
        flagCont();
      } else if (button.querySelector(".flag") === null) {
        if (
          button.classList.value.includes("campTree") ||
          button.classList.value.includes("campFour")
        ) {
        } else {
          const imgFlag = document.createElement("img");
          const flag = localStorage.getItem("Difficulty");

          button.classList.add("divFlag");

          if (flag === "Easy") {
            imgFlag.src = "../img/red-flag-removebg-preview.png";
            imgFlag.classList.add("flag");
          } else if (flag === "Normal") {
            imgFlag.src = "../img/orange_flag.png";
            imgFlag.classList.add("flag", "flag--normal");
          } else if (flag === "Hard") {
            imgFlag.src = "../img/blue_flag.png";
            imgFlag.classList.add("flag", "flag--hard");
          }

          button.appendChild(imgFlag);
          contFlag--;
          flagCont();

          if (button.classList.value.includes("bomb")) {
            bomb--;
          }
          if (bomb === 0) {
            const body = document.querySelector("body");

            body.insertAdjacentHTML(
              "beforeend",
              `
              <div class="victory">
                <div class="victory__modal">
                  <h2 class="title__victory">Você Venceu!</h2>
                  <div>
                  <div class="buttons__victory">
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
                window.location.replace("/src/pages/game.html");
              })

            clearInterval(timer);
          }
        }
      }
    });
  });
}

flegCreateAndRenderAndRemove();
