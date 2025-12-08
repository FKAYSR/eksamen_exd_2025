"use strict";

// Opretter vores data-struktur med et array som indeholder JS objekter
const fishInfo = [
  {
    id: "gul-kirurgfisk",
    fishImg: "./images/facts/gul-kirurgfisk.svg",
    fishName: "Gul kirurgfisk",
    fishFact:
      "Den gule kirurgfisk har en skarp “skalpel” ved haleroden, som den kan bruge til at forsvare sig. Det er derfor, den kaldes kirurgfisk.",
  },

  {
    id: "dvaergkejserfisk",
    fishImg: "./images/facts/dvaergkejserfisk.svg",
    fishName: "Dværgkejserfisk",
    fishFact:
      "Jeg findes i mange flotte farver og mønstre – fra gul og blå til orange og rød. Nogle af os har endda tofarvede mønstre!",
  },

  {
    id: "paletkirurgfisk",
    fishImg: "./images/facts/paletkirurgfisk.svg",
    fishName: "Paletkirurgfisk",
    fishFact:
      "Jeg er søster til Dory! Måske du kan hjælpe mig med at finde hende og Nemo??",
  },

  {
    id: "klovnefisk",
    fishImg: "./images/facts/klovnfisk.svg",
    fishName: "Klovnefisk",
    fishFact:
      "Jeg er en af Nemo’s venner! Vi bor i giftige blomster, men bare rolig! Vi bliver slet ikke syge!",
  },

  {
    id: "pudsefisk",
    fishImg: "./images/facts/pudsefisk.svg",
    fishName: "Pudsefisk",
    fishFact:
      "Jeg er havets tandlæge! Jeg tør svømme helt ind i munden, på andre KÆMPE fisk for at finde mad!",
  },

  {
    id: "hvidstrubet-kirurgfisk",
    fishImg: "./images/facts/hvidstrubet-kirurgfisk.svg",
    fishName: "Hvidstrubet kirugfisk",
    fishFact:
      "Jeg hjælper med at holde havet rent! Det gør jeg fordi at jeg spiser en hel masse alger!",
  },

  {
    id: "pincetfisk",
    fishImg: "./images/facts/pincetfisk.svg",
    fishName: "Pincetfisk",
    fishFact:
      "Jeg har en lang og tynd snude, som jeg kan bruge til at fange andre små dyr! Det ligner åbnebart en pincet, så det er derfor jeg hedder Pincetfisk!",
  },

  {
    id: "sortbaandet-kirurgfisk",
    fishImg: "./images/facts/sortbaandet-kirurgfisk.svg",
    fishName: "Sortbåndet kirugfisk",
    fishFact:
      "Jeg svømmer rundt med mine mange venner! Og Jeg er altså ikke en zebra! Jeg har heller ikke været i fængsel!",
  },
];

// Venter med at køre JS koden indtil hele HTML-siden er indlæst
document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip"); // Finder tooltip id og gemmer det i en variabel
  // Funktion der viser tooltip med fiskeoplysninger
  // Parameter: html - den tekst indeholdende html-tags som vi vil vise i tooltip'en
  function showTooltip(html) {
    tooltip.innerHTML = html;
    tooltip.classList.add("is-visible");
    setTimeout(() => {
      tooltip.classList.remove("is-visible");
    }, 8000);
  }

  // fishInfo.forEach((fish) => {
  //   const classMap = {
  //     "Gul kirurgfisk: "gul-kirurgfisk",
  //     Dværgkejserfisk: "dvaergkejserfisk",
  //     Paletkirurgfisk: "paletkirurgfisk",
  //     Klovnefisk: "klovnefisk",
  //     Pudsefisk: "pudsefisk",
  //     "Hvidstrubet kirugfisk": "hvidstrubet-kirurgfisk",
  //     Pincetfisk: "pincetfisk",
  //     "Sortbåndet kirugfisk": "sortbaandet-kirurgfisk",
  //   };

    // const className = classMap[fish.fishName];

    // Tilføjer event listeners til hver fisk baseret på data-strukturen
    fishInfo.forEach((fish) => {
      const fishDetails = document.getElementById(fish.id);
      if (fishDetails) {
        fishDetails.addEventListener("click", () => {
          const fishFacts = `
        <img src=${fish.fishImg} alt=${fish.fishName}>
        <strong>${fish.fishName}</strong><br>
        Fact: ${fish.fishFact}`;  // Opretter HTML tekst med fiskeoplysninger
            // ShowTooltip er en funktion fra tidligere, forventer en parameter som vi her henter fra fishDetails
            showTooltip(fishFacts);
        });
      };
    });
  });