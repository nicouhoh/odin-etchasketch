let container = document.querySelector("#container");
container.style.display = "flex";
container.style.justifyContent = "center";

function createGrid(rows, columns) {
  let grid = document.createElement("div");
  grid.style.display = "flex";
  grid.style.flexDirection = "column";
  grid.style.width = "960px";
  grid.style.height = "960px";

  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    for (let j = 0; j < columns; j++) {
      let cell = document.createElement("div");
      cell.style.borderWidth = "0";
      cell.style.flexGrow = "1";
      cell.style.aspectRatio = "1 / 1";

      cell.addEventListener("mouseenter", function () {
        cell.style.background = "lightblue";
      });

      row.appendChild(cell);
    }
    grid.appendChild(row);
  }

  container.replaceChildren(grid);
}

let button = document.querySelector("button");
button.addEventListener("click", function () {
  let gridSize = prompt("Enter grid size", 16);
  createGrid(gridSize, gridSize);
});

createGrid(16, 16);
