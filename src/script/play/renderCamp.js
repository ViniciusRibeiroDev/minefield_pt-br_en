const mainPlay = document.querySelector(".main__container");

function renderMap(mapParams) {
  mapParams.forEach((line, indexLine) => {
    const divLine = document.createElement("div");

    divLine.classList.add("line");
    line.forEach((column, indexColumn) => {
      if (column === 0) {
        const divOne = document.createElement("div");

        divOne.classList.add("campOne", "button");

        if (mapBomb[indexLine][indexColumn] === "X") {
          divOne.classList.add("bomb");

          const imgBomb = document.createElement("img");

          imgBomb.src = "../img/bomb-removebg-preview.png";
          imgBomb.classList.add("bombRender");
    
          divOne.appendChild(imgBomb);
        }

        if (
          mapBomb[indexLine][indexColumn] !== 0 &&
          mapBomb[indexLine][indexColumn] !== "X"
        ) {
          const pNumberOne = document.createElement("p");

          divOne.classList.add("number");
          pNumberOne.innerText = mapBomb[indexLine][indexColumn];

          divOne.appendChild(pNumberOne);
        }

        divLine.appendChild(divOne);
      }
      if (column === 1) {
        const divTwo = document.createElement("div");

        divTwo.classList.add("campTwo", "button");

        if (mapBomb[indexLine][indexColumn] === "X") {
          divTwo.classList.add("bomb");

          const imgBomb = document.createElement("img");

          imgBomb.src = "../img/bomb-removebg-preview.png";
          imgBomb.classList.add("bombRender");
    
          divTwo.appendChild(imgBomb);
        }

        if (
          mapBomb[indexLine][indexColumn] !== 0 &&
          mapBomb[indexLine][indexColumn] !== "X"
        ) {
          const pNumberTwo = document.createElement("p");

          divTwo.classList.add("number");
          pNumberTwo.innerText = mapBomb[indexLine][indexColumn];

          divTwo.appendChild(pNumberTwo);
        }

        divLine.appendChild(divTwo);
      }
    });
    mainPlay.appendChild(divLine);
  });
}

renderMap(mapPlay);
renderLocalStorageDifficulty();