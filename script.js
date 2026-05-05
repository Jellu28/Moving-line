const board = document.querySelector("#board");
const totalSquare = 1000;
const colors = [
  "#556B2F",
  "#FF8C00",
  "#9932CC",
  "#E9967A",
  "#8FBC8F",
  "#00CED1",
  "#ADFF2F",
  "#FFD700",
  "#FF1493",
  "#00BFFF",
  "#32CD32",
  "#FF4500",
  "#6A5ACD",
  "#20B2AA",
  "#7B68EE",
  "#40E0D0",
  "#EE82EE",
  "#F0E68C",
  "#4682B4",
  "#D2691E",
];

for (let i = 0; i < totalSquare; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(el) {
  const color = generateColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(el) {
  el.style.background = "#999";
  el.style.boxShadow = "0 0 2px #999";
}

function generateColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
