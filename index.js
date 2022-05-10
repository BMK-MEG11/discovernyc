// Header add background
const header = document.getElementById("header");

window.onscroll = function headerBackground() {
  let pageOffset = window.pageYOffset;

  if (pageOffset >= 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

// Typewriter
const textToReplace = document.getElementById("text-replace");
const replacementText = ["NYC", "BRKLN", "QNS", "MNHTTN"];
let i = 0;
let j = 0;
let currentText = [];
let isDeleting = false;

function loop() {
  textToReplace.innerHTML = currentText.join("");

  if (i < replacementText.length) {
    if (!isDeleting && j <= replacementText[i].length) {
      currentText.push(replacementText[i][j]);
      j++;
    }

    if (isDeleting && j <= replacementText[i].length) {
      currentText.pop(replacementText[i][j]);
      j--;
    }

    if (j == replacementText[i].length) {
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentText = [];
      isDeleting = false;
      i++;

      if (i === replacementText.length) {
        i = 0;
      }
    }
  }
  const speed = Math.random() * (500 - 400) + 400;
  setTimeout(loop, speed);
}

loop();
