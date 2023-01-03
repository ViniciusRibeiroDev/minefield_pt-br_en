/* Função responsável por criar a expansão quando um espaço vazio é criado. */

const mainContainer = document.querySelector(".main__container");

function renderExpand(y, x) {
  if (
    mainContainer.childNodes[y].childNodes[x].classList.value.includes(
      "campTree"
    ) &&
    !mainContainer.childNodes[y].childNodes[x].classList.value.includes(
      "number"
    ) &&
    !mainContainer.childNodes[y].childNodes[x].classList.value.includes("bomb")
  ) {
    if (y === 0 && x === 0) {
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x + 1].classList.add(
        "campTree"
      );
    } else if (y === 0 && x !== 19) {
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campFour");
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x + 1].classList.add(
        "campTree"
      );
      mainContainer.childNodes[y + 1].childNodes[x - 1].classList.add(
        "campTree"
      );
    } else if (y !== 11 && x === 0) {
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x + 1].classList.add(
        "campTree"
      );
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y - 1].childNodes[x + 1].classList.add(
        "campTree"
      );
    } else if (y === 11 && x !== 19) {
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campFour");
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campFour");
      mainContainer.childNodes[y - 1].childNodes[x + 1].classList.add(
        "campTree"
      );
      mainContainer.childNodes[y - 1].childNodes[x - 1].classList.add(
        "campTree"
      );
    } else if (y !== 11 && x === 19) {
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x - 1].classList.add(
        "campTree"
      );
      mainContainer.childNodes[y - 1].childNodes[x - 1].classList.add(
        "campTree"
      );
    } else if (y === 11 && x === 19) {
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y - 1].childNodes[x - 1].classList.add(
        "campTree"
      );
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campFour");
    } else {
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campFour");
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campFour");
      mainContainer.childNodes[y + 1].childNodes[x + 1].classList.add(
        "campTree"
      );
      mainContainer.childNodes[y + 1].childNodes[x - 1].classList.add(
        "campTree"
      );
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campFour");
      mainContainer.childNodes[y - 1].childNodes[x + 1].classList.add(
        "campTree"
      );
      mainContainer.childNodes[y - 1].childNodes[x - 1].classList.add(
        "campTree"
      );
    }
  }
  // -------------------------------------------------------------------------------------------------
  if (
    mainContainer.childNodes[y].childNodes[x].classList.value.includes(
      "campFour"
    ) &&
    !mainContainer.childNodes[y].childNodes[x].classList.value.includes(
      "number"
    ) &&
    !mainContainer.childNodes[y].childNodes[x].classList.value.includes("bomb")
  ) {
    if (y === 0 && x !== 19) {
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campTree");
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campTree");
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y + 1].childNodes[x + 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y + 1].childNodes[x - 1].classList.add(
        "campFour"
      );
    } else if (y === 0 && x === 19) {
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y + 1].childNodes[x - 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campTree");
    } else if (y !== 11 && x === 0) {
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campTree");
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y + 1].childNodes[x + 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y - 1].childNodes[x + 1].classList.add(
        "campFour"
      );
    } else if (y === 11 && x === 0) {
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y - 1].childNodes[x + 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campTree");
    } else if (y === 11 && x !== 19) {
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campTree");
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campTree");
      mainContainer.childNodes[y - 1].childNodes[x + 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y - 1].childNodes[x - 1].classList.add(
        "campFour"
      );
    } else if (y !== 11 && x === 19) {
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campTree");
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y + 1].childNodes[x - 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y - 1].childNodes[x - 1].classList.add(
        "campFour"
      );
    } else {
      mainContainer.childNodes[y].childNodes[x + 1].classList.add("campTree");
      mainContainer.childNodes[y].childNodes[x - 1].classList.add("campTree");
      mainContainer.childNodes[y + 1].childNodes[x + 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y + 1].childNodes[x - 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y + 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y - 1].childNodes[x].classList.add("campTree");
      mainContainer.childNodes[y - 1].childNodes[x + 1].classList.add(
        "campFour"
      );
      mainContainer.childNodes[y - 1].childNodes[x - 1].classList.add(
        "campFour"
      );
    }
  }
}

function indexXY() {
  mainContainer.childNodes.forEach((y, yIndex) => {
    y.childNodes.forEach((x, xIndex) => {
      y.addEventListener("click", renderExpand(yIndex, xIndex));
    });
  });
}
