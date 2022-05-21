//  Exercise 4
const button1 = document.querySelector("#btn-1");
const p = document.querySelector("#paragraph-1");

button1.addEventListener("click", increaseNumber);

function increaseNumber() {
  let number = Number(p.innerText);
  p.innerText = number + 1;
}

// Exercise 5
const button2 = document.querySelector("#btn-2");

button2.addEventListener("click", toggleDiv);

function toggleDiv() {
  if (button2.innerText == "Hide") {
    document.getElementById("toggle-div").style.visibility = "hidden";
    button2.innerText = "Show";
  } else {
    document.getElementById("toggle-div").style.visibility = "visible";
    button2.innerText = "Hide";
  }
}

//  Advanced Exercise 1
const button3 = document.querySelector("#btn-3");
const colouredParagraph = document.querySelector("#coloured-paragraph");
const colorInput = document.querySelector("#color-input");
button3.addEventListener("click", changeColor);

function changeColor() {
  let enteredColor = colorInput.value;
  enteredColor.toLowerCase().trim();
  colouredParagraph.style.color = enteredColor;
}
