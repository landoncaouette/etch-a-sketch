const depth = document.getElementById("dimension").value;
let equalSpacing = (1 / depth) * 100;
const canvas = document.querySelector(".canvas");

function initialize(depth) {
  for (let i = 0; i < depth; i++) {
  let gridRow = document.createElement('div');
  gridRow.className = "grid-row";
  gridRow.style.height = `${equalSpacing}%`;
  for (let n = 0; n < depth; n++) {
    let cell = document.createElement('div');
    cell.className = "cell";
    cell.innerText = n;
    cell.style.width = `${equalSpacing}%`;
    gridRow.appendChild(cell);
    }
  canvas.appendChild(gridRow);
  }
}

initialize(depth);