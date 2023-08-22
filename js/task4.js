

const counter = document.querySelector("#counter");
const counterValueElement = document.querySelector("#value");
const buttonDecrement = counter.firstElementChild;
const buttonIncrement = counter.lastElementChild;
let counterValue = Number(counterValueElement.textContent);

const onButtonDecrement = () => {
    counterValue -= 1;
  counterValueElement.textContent = counterValue;
};

const onButtonIncrement = () => {
    counterValue += 1;
 counterValueElement.textContent = counterValue;
};

buttonDecrement.addEventListener("click", onButtonDecrement);
buttonIncrement.addEventListener("click", onButtonIncrement);