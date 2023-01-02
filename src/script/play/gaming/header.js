let cont = 1;

function clickCont() {
  const click = document.querySelector(".moves");

  click.innerText = contClick;
}

function flagCont() {
  const flag = document.querySelector(".flags");

  flag.innerText = contFlag;
}

setInterval(() => {
  const timer = document.querySelector(".timer");
  
  timer.innerText = cont;
  
  cont++;
}, 1000);

flagCont();
