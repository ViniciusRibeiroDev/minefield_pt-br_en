let cont = 1;

/* Funções responsaveis pelo cabeçalho. Atualização dos numeros de: click (quantidade de jogadas),
bandeiras, tempo de jogo (em segundos) e o botão de fechar. */

function clickCont() {
  const click = document.querySelector(".moves");

  click.innerText = contClick;
}

function flagCont() {
  const flag = document.querySelector(".flags");

  flag.innerText = contFlag;
}

// function timer() {
let timer =  setInterval(() => {
    const timer = document.querySelector(".timer");

    timer.innerText = cont;

    cont++;
  }, 1000);
// }

function closeGame() {
  const body = document.querySelector(".background");
  const close = document.querySelector(".close");
  const divContainerModal = document.createElement("div");
  const divModal = document.createElement("div");
  const divButtons = document.createElement("div");
  const h3QuestClose = document.createElement("h3");
  const buttonClose = document.createElement("button");
  const aClose = document.createElement("a");
  const buttonNotClose = document.createElement("button");

  close.addEventListener("click", (e) => {
    e.preventDefault();

    h3QuestClose.innerText = "Deseja sair?";
    aClose.innerText = "Sair";
    buttonNotClose.innerText = "Continuar";
    aClose.href = "../../index.html";

    divContainerModal.classList.add("close__container");
    divModal.classList.add("modal__container");
    divButtons.classList.add("buttons");
    buttonClose.classList.add("button__close", "close__game");
    buttonNotClose.classList.add("button__close", "close__game--not");

    buttonClose.appendChild(aClose);
    divButtons.append(buttonClose, buttonNotClose);
    divModal.append(h3QuestClose, divButtons);
    divContainerModal.appendChild(divModal);
    body.appendChild(divContainerModal);

    clearInterval(timer);
  });
  buttonNotClose.addEventListener("click", () => {
    divContainerModal.remove();
     timer = setInterval(() => {
      const timer = document.querySelector(".timer");
  
      timer.innerText = cont;
  
      cont++;
    }, 1000);
  });
}

flagCont();
closeGame();
