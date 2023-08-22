
const input = document.querySelector("#validation-input"); 
const length = parseInt(input.dataset.length); 
const onBlur = event => { 
  if(event.currentTarget.value.length === length) {
    input.classList.add("valid")
    input.classList.remove("invalid")
  } else { 
    input.classList.add("invalid")
    input.classList.remove("valid")
  }
};
input.addEventListener("blur", onBlur);
