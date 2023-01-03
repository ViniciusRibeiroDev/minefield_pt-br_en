/* Funções responsavel por criar os 2 mapas de para visualização devTools, aonde por eles 
serão rendezido o mapa na tela. */

let mapPlay = [];

let mapBomb = [];

let bomb = contFlag;

function createMapPlayDev(map) {
  for (let height = 0; height < 6; height++) {
    for (let lineOne = 0; lineOne < 1; lineOne++) {
      let mapConsole = [];
      for (let width = 0; width < 10; width++) {
        mapConsole.push(0);
        mapConsole.push(1);
      }
      map.push(mapConsole);
    }
    for (let lineTwo = 0; lineTwo < 1; lineTwo++) {
      let mapConsole = [];
      for (let width = 0; width < 10; width++) {
        mapConsole.push(1);
        mapConsole.push(0);
      }
      map.push(mapConsole);
    }
  }
}

function createMapBomDev(map) {
  for (let height = 0; height < 6; height++) {
    for (let lineOne = 0; lineOne < 1; lineOne++) {
      let mapConsole = [];
      for (let width = 0; width < 10; width++) {
        mapConsole.push(0);
        mapConsole.push(0);
      }
      map.push(mapConsole);
    }
    for (let lineTwo = 0; lineTwo < 1; lineTwo++) {
      let mapConsole = [];
      for (let width = 0; width < 10; width++) {
        mapConsole.push(0);
        mapConsole.push(0);
      }
      map.push(mapConsole);
    }
  }
}

function bombGenerate(map) {
  for (let i = 1; i <= bomb; i++) {
    let checker = false;

    while (checker === false) {
      let columnIndex = Math.floor(Math.random() * 20);
      let lineIndex = Math.floor(Math.random() * 12);

      if (map[lineIndex][columnIndex] === 0) {
        map[lineIndex][columnIndex] = "X";

        checker = true;
      }
    }
  }
}

function createNumbers(map) {
  map.forEach((lineElement, x) => {
    lineElement.forEach((columnElement, y) => {
      if (columnElement === "X") {
        if (x === 0 && y === 0) {
          if (map[x][y + 1] !== "X") {
            map[x][y + 1] += 1;
          }
          if (map[x + 1][y] !== "X") {
            map[x + 1][y] += 1;
          }
          if (map[x + 1][y + 1] !== "X") {
            map[x + 1][y + 1] += 1;
          }
        } else if (x === 0 && y !== 19) {
          if (map[x][y + 1] !== "X") {
            map[x][y + 1] += 1;
          }
          if (map[x][y - 1] !== "X") {
            map[x][y - 1] += 1;
          }
          if (map[x + 1][y] !== "X") {
            map[x + 1][y] += 1;
          }
          if (map[x + 1][y + 1] !== "X") {
            map[x + 1][y + 1] += 1;
          }
          if (map[x + 1][y - 1] !== "X") {
            map[x + 1][y - 1] += 1;
          }
        } else if (x === 0 && y === 19) {
          if (map[x + 1][y] !== "X") {
            map[x + 1][y] += 1;
          }
          if (map[x + 1][y - 1] !== "X") {
            map[x + 1][y - 1] += 1;
          }
          if (map[x][y - 1] !== "X") {
            map[x][y - 1] += 1;
          }
        } else if (x !== 11 && y === 0) {
          if (map[x][y + 1] !== "X") {
            map[x][y + 1] += 1;
          }
          if (map[x + 1][y] !== "X") {
            map[x + 1][y] += 1;
          }
          if (map[x + 1][y + 1] !== "X") {
            map[x + 1][y + 1] += 1;
          }
          if (map[x - 1][y] !== "X") {
            map[x - 1][y] += 1;
          }
          if (map[x - 1][y + 1] !== "X") {
            map[x - 1][y + 1] += 1;
          }
        } else if (x === 11 && y === 0) {
          if (map[x - 1][y] !== "X") {
            map[x - 1][y] += 1;
          }
          if (map[x - 1][y - 1] !== "X") {
            map[x - 1][y - 1] += 1;
          }
          if (map[x][y + 1] !== "X") {
            map[x][y + 1] += 1;
          }
        } else if (x === 11 && y !== 19) {
          if (map[x - 1][y] !== "X") {
            map[x - 1][y] += 1;
          }
          if (map[x][y + 1] !== "X") {
            map[x][y + 1] += 1;
          }
          if (map[x][y - 1] !== "X") {
            map[x][y - 1] += 1;
          }
          if (map[x - 1][y + 1] !== "X") {
            map[x - 1][y + 1] += 1;
          }
          if (map[x - 1][y - 1] !== "X") {
            map[x - 1][y - 1] += 1;
          }
        } else if (x !== 11 && y === 19) {
          if (map[x][y - 1] !== "X") {
            map[x][y - 1] += 1;
          }
          if (map[x + 1][y] !== "X") {
            map[x + 1][y] += 1;
          }
          if (map[x - 1][y] !== "X") {
            map[x - 1][y] += 1;
          }
          if (map[x + 1][y - 1] !== "X") {
            map[x + 1][y - 1] += 1;
          }
          if (map[x - 1][y - 1] !== "X") {
            map[x - 1][y - 1] += 1;
          }
        } else if (x === 11 && y === 19) {
          if (map[x - 1][y] !== "X") {
            map[x - 1][y] += 1;
          }
          if (map[x - 1][y - 1] !== "X") {
            map[x - 1][y - 1] += 1;
          }
          if (map[x][y - 1] !== "X") {
            map[x][y - 1] += 1;
          }
        } else {
          if (map[x][y + 1] !== "X") {
            map[x][y + 1] += 1;
          }
          if (map[x][y - 1] !== "X") {
            map[x][y - 1] += 1;
          }
          if (map[x + 1][y + 1] !== "X") {
            map[x + 1][y + 1] += 1;
          }
          if (map[x + 1][y - 1] !== "X") {
            map[x + 1][y - 1] += 1;
          }
          if (map[x + 1][y] !== "X") {
            map[x + 1][y] += 1;
          }
          if (map[x - 1][y] !== "X") {
            map[x - 1][y] += 1;
          }
          if (map[x - 1][y + 1] !== "X") {
            map[x - 1][y + 1] += 1;
          }
          if (map[x - 1][y - 1] !== "X") {
            map[x - 1][y - 1] += 1;
          }
        }
      }
    });
  });
}

createMapPlayDev(mapPlay);
createMapBomDev(mapBomb);
bombGenerate(mapBomb);
createNumbers(mapBomb);
