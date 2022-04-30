let depth = document.getElementById("dimension").value;
const input = document.getElementById("dimension");
const canvas = document.querySelector(".canvas");
const flash = document.querySelector(".flash");

// Initialize the grid on page load with default value of 16
function initialize(depth) {
  gridGen(depth);
}

// Generate the grid
function gridGen(depth) {
  if (depth >= 2 && depth <= 100) {
    gridClear();
    let equalSpacing = (1 / depth) * 100;
    for (let i = 0; i < depth; i++) {
      let gridRow = document.createElement("div");
      gridRow.className = "grid-row";
      gridRow.style.height = `${equalSpacing}%`;
      for (let n = 0; n < depth; n++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        // cell.innerText = n;
        cell.style.width = `${equalSpacing}%`;
        gridRow.appendChild(cell);
      }
      canvas.appendChild(gridRow);
    }
  } else {
    flash.textContent = "Error, please pick a size between 2 and 100";
  }
}

// Clear the grid
function gridClear() {
  canvas.innerHTML = "";
}

initialize(depth);

input.addEventListener("change", () => {
  let newDepth = document.getElementById("dimension").value;
  gridGen(newDepth);
});
