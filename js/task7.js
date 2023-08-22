const input = document.querySelector("#font-size-control");
console.dir(input.value);
const span = document.querySelector("#text");
const onInput = event => {
    span.style.fontSize = `${input.value}px`;
}
input.addEventListener("input", onInput);