const texts = ["Full-Stack Developer", "Engineer", "Creator", "Innovator"];
let count = 0;
let index = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  let currentText = texts[count];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, index--);
  } else {
    typingElement.textContent = currentText.substring(0, index + 1);
    index++;
  }

  // Typing speed
  let speed = isDeleting ? 80 : 120;

  // Pause at full text
  if (!isDeleting && index === currentText.length) {
    speed = 1200; // wait before deleting
    isDeleting = true;
  }
  // Pause at empty
  else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length; // go to next word
    speed = 500; // pause before typing again
  }

  setTimeout(type, speed);
}

type();
