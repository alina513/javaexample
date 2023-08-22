
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("#controls").firstElementChild;
const div = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
input.addEventListener("input", onInput);

let amount;

function onInput(event) {
  amount = event.currentTarget.value;
}

let array = [];
let step = 30;
function createBoxes() {
  for (let counter = 0; counter < amount; counter++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    
    step += 10;
    newDiv.style.width = `${step}px`;
    newDiv.style.height = `${step}px`;
  
    array.push(newDiv);
  }

  div.append(...array);
}

function destroyBoxes() {
  div.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

