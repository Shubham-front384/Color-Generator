let redRange = document.getElementById("red-color");
let greenRange = document.getElementById("green-color");
let blueRange = document.getElementById("blue-color");
let colorBox = document.querySelector(".color-box");
let colorValue = document.querySelector(".color-value");
let button = document.querySelector("button");

colorBox.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
colorValue.textContent = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;

redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

function updateColor() {
  let redValue = redRange.value;
  let greenValue = greenRange.value;
  let blueValue = blueRange.value;

  let allValue = "";
  allValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  colorBox.style.backgroundColor = allValue;
  colorValue.textContent = allValue;
}

button.addEventListener("click", () => {
  let redValue = Math.floor(Math.random() * 256);
  let greenValue = Math.floor(Math.random() * 256);
  let blueValue = Math.floor(Math.random() * 256);

  let valueColor = "";
  valueColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  colorBox.style.backgroundColor = valueColor;
  colorValue.textContent = valueColor;
});
