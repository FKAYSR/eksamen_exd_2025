"use strict";

// Funktion der afspiller lyd når boble klikkes
function handleBubbleClick(event) {
  const bubbleSound = new Audio("sound/forside/bubble-pop.mp3");
  bubbleSound.play();
}

// venter med at hente js-siden til hele html er loaded
document.addEventListener("DOMContentLoaded", () => {
  // tilføjer click handlers til alle bubbles
  document.querySelectorAll(".bubble").forEach((bubble) => {
    bubble.addEventListener("click", handleBubbleClick);
  });
});

// Skattekiste lyd
function handleSkattekisteClick(event) {
  const skattekisteSound = new Audio("sound/forside/skattekiste-sound.mp3");
  skattekisteSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const skattekiste = document.getElementById("skattekiste");
  skattekiste.addEventListener("click", handleSkattekisteClick);
});

// Piratskib lyd
function piratClick(event) {
  const piratSound = new Audio("sound/forside/wooden-ship-break.mp3");
  piratSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const piratskib = document.getElementById("piratskib");
  piratskib.addEventListener("click", piratClick);
});

// #region - Virker ikke endnu! Lyd til spil knappen
// function playBtnClick(event) {
//   const playBtnSound = new Audio("exd-akvarie/sound/eating-chips.mp3");
//   playBtnSound.play();
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const playBtn = document.getElementById("play-button");
//   playBtn.addEventListener("click", playBtnClick);
// });

// #endregion
