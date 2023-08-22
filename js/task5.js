let input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");
const onInput = event => {
    return span.textContent = event.currentTarget.value};
input.addEventListener("input", onInput);