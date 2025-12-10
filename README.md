# ExD projekt forbedret til eksamen 1. semester, 2025

> **Udvikler: Freja Kejser**
> > Dette projekt består af en startside, en spil side og en fakta side
> > > _Her er link til mit website: [Github page](https://fkaysr.github.io/eksamen_exd_2025/index.html)_

## Optimeringer lavet i dette projekt

### 1. Startside

- Ændret mappestrukturen så den er mere overskuelig
  - Samlet alle .css, .js, lyde og billeder i respektive mapper og navngivet ift. hvilken side de hører til
- index.html
  - Rettet validerings errors, som var at 2 `<a>` links var placeret inde i en `<div>`, så divene er blevet fjernet og der er ikke længere nogle fejl i validatoren ved nogle af .html siderne
  - Har ryddet lidt op i denne fil, ved at slette unødvendige ting og samlet nogle ting der hører sammen på én linje
- style.css
  - Har gjort bobble-knapperne og teksten indeni større
  - Givet bobble-knapperne en float animation, så de bevæger sig som stillestående bobler

### 2. Pac-Nemo (spil)

Her styrer man en fisk, samler tabte mønter i havet og får point med lyd-feedback og en visuel point viser.
Inspireret af Pac-man spillet fra MKI's undervisning [MKI Pac-man spil ](https://github.com/muratkilic1978/moving-things-with-js-and-sound-exercise.git)

- spil.css
  - Ryddet op ved at fjerne #start og .rock som ikke gjorde noget
  - Fik tilføjet collectible og HUD i HTML filen som jeg her har bestemt størrelsen på og placeret som jeg ville
  - Ændret tilbage-knappen
- spil.js
  - Fjernet at den afspiller lyde ved bevægelse og når den rammer siden af skærmen
  - Tilføjet collectibles(mønter) og HUD der viser mængden af point
  - Jeg har lavet dette fra linje 73 til 134

### 3. Fakta-side (facts)

Den interaktive fakta-side gør det muligt for brugeren at lære om fiskene som findes i Storcenter Nords akvarie. Inspireret af [MKI Road-show](https://github.com/muratkilic1978/js-road-show-with-css-animations-exercise.git)

- facts.html
  - Ryddet op ved at fjerne boblerne, da de ikke vises her alligevel. Fjernede også class fra hver enkelt fisk og beholdte bare classen i den div de alle er med i
  - Tilføjede facts-bubble, som forklarer hvad man skal på siden
- facts.css
  - Tilføjet animationer til alle fiskene i stedet for at de før bare var i et grid. Fra linje 79 til 237
  - Bestemt størrelse og placering af den ny tilføjede facts-bubble
  - Ændret klassen "facts" så tooltip pop-up har fået ændret placering og udseende
  - tooltip-content tilføjet for at ændre placeringen og størrelsen på teksten og billede placeret i tooltippen
  - Overlay tilføjet så baggrunden bliver sløret når pop-up vises og muligt at lukke pop-up ved at trykke hvor som helst på skærmen
- facts.js
  - fishInfo ændret så i stedet for fishName, fishColor, fishLocation, fishLength og fishFood, er det nu id, fishImg, fishName og fishFact
  - eventListener ændret så overlay er tilføjet til klik eventet og classMap er fjernet til fordel for at have givet hvert objekt et id oppe i fishInfo

