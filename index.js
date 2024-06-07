const textareaE1 = document.
getElementById("textarea");

const totalCounterE1 = document.
getElementById("total-Counter");

const remainingCounterE1 = document.
getElementById("remaining-Counter");

textareaE1.addEventListener("keyup", () =>{
updateCounter();

});

function updateCounter(){
totalCounterE1.innerText = textareaE1.value.
length;
remainingCounterE1.innerText = 
textareaE1.getAttribute("maxlenght") -
  textareaE1.value.length;

}