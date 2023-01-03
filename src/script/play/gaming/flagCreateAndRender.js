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
            const divVictory = document.createElement("div");
            const h2Victory = document.createElement("h2");

            h2Victory.innerText = "Você Venceu!";

            h2Victory.classList.add("title__victory");
            divVictory.classList.add("victory");

            divVictory.appendChild(h2Victory);
            body.appendChild(divVictory);
            clearInterval(timer)
          }
        }
      }
    });
  });
}

flegCreateAndRenderAndRemove();
