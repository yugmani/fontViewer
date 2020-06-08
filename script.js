
const fontEl = document.querySelector("#fonts");
const clearEl = document.querySelector("#clear");
const h1El = document.querySelector("#h1");
const h2El = document.querySelector("#h2");
const h3El = document.querySelector("#h3");
const h4El = document.querySelector("#h4");
const pEl = document.querySelector("#p");
const textareaEl = document.querySelector("#textarea");
var fontContainer = document.querySelector(".container");

var displays = [ h1El, h2El, h3El, h4El, pEl];

var fontface;

fontEl.addEventListener("change", fontChange);
textareaEl.addEventListener("keydown", keydownTextarea);
clearEl.addEventListener("click", clearEvent);


function fontChange(event){
    event.preventDefault();
    fontface = fontEl.value;
    fontContainer.style.fontFamily = fontface;
}

function clearEvent(event){
    event.preventDefault();
    textareaEl.value = "";
    displays.forEach(function(display){
        display.textContent = "";
    });
}

function keydownTextarea(event){
    // event.preventDefault();
    var key = event.key.toLowerCase();
    var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    if(alphaNumeric.includes(key)){
        displays.forEach(function(display){
            display.textContent += event.key;
        });
    }
}


