"use strict";

const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
const dodgerWidth = 100;
const dodgerHeight = 100;

dodger.style.left = "700px"; // Start i midten horisontalt
dodger.style.bottom = "350px"; // Start i midten vertikalt

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
  console.log(e.key); // Viser hvilken tast der er trykket
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 30}px`;
    dodger.style.transform = "scaleX(-1)"; // Vend billedet horisontalt
  } else {
    playSoundOnGameOver();
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameWidth = game.offsetWidth; // Få bredden af spilområdet

  if (left < gameWidth - dodgerWidth) {
    // Sørg for at dodger ikke går ud af højre kant
    dodger.style.left = `${left + 30}px`;
    dodger.style.transform = "scaleX(+1)"; // Vend billedet horisontalt
  } else {
    playSoundOnGameOver();
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  const gameHeight = game.offsetHeight;

  if (bottom < gameHeight - dodgerHeight) {
    // Sørg for at dodger ikke går ud af toppen
    dodger.style.bottom = `${bottom + 30}px`;
    dodger.style.transform = "rotate(-90deg)"; // rotér billedet vertikalt
  } else {
    playSoundOnGameOver();
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 30}px`;
    dodger.style.transform = "rotate(90deg)"; // rotér billedet vertikalt
  } else {
    playSoundOnGameOver();
  }
}

// Afspiller lyd ved kollation med væg
const gameoverSound = document.getElementById("gameoverSound");

function playSoundOnGameOver() {
  gameoverSound.currentTime = 0;
  gameoverSound.play();
}

// Forbedring - point med collectibles(mønter)
const collectiblesContainer = document.getElementById("collectibles");
const point = document.getElementById("point");
const collectSound = document.getElementById("collectSound");

let points = 0;
point.textContent = points;

function visCollectible() {
  const c = document.createElement("img");
  c.className = "collectible";
  c.src = "./images/spil/coin.svg";
  // Start udenfor toppen
  const minX = 0;
  const maxX = Math.max(0, game.clientWidth - 32);
  const randomX = Math.floor(Math.random() * maxX);
  c.style.left = randomX + "px";
  c.style.top = "-40px";
  collectiblesContainer.appendChild(c);
  return c;
}

// Bevæg collectible nedad og tjek for kollision!
function kollision() {
  const collectibles = Array.from(document.getElementsByClassName("collectible"));
  const dodgerRect = dodger.getBoundingClientRect();

  collectibles.forEach(c => {
    // FLyt objektet
    const top = parseFloat(c.style.top || 0);
    const speed = 2 + Math.random() * 2;
    c.style.top = top + speed + "px";

    // clientHeight er defineret af browseren og er her med til at tjekke om en collectible er faldet længere ned end selve spilområdet.
    if (top > game.clientHeight + 50) {
      c.remove();
      return;
    }

    // Kollisions test
    const cRect = c.getBoundingClientRect();
    if (!(cRect.right < dodgerRect.left ||
      cRect.left > dodgerRect.right ||
      cRect.top < dodgerRect.top ||
      cRect.bottom > dodgerRect.bottom)) {
      points += 1;
      point.textContent = points;
      c.remove();
      if (collectSound) {
        collectSound.currentTime = 0;
        collectSound.play().catch(() =>{});
      }
    }
  });
}

// Vis løbende
setInterval(() => {
  visCollectible();
}, 1500);

setInterval(kollision, 20);
