// Inclure le header automatiquement
window.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-container").innerHTML = data;
      });
  });

  // Inclure le footer automatiquement
window.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-container").innerHTML = data;
      });
  
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-container").innerHTML = data;
      });
  });

  // === Hero Section Slideshow ===
const hero = document.getElementById("hero");

const heroImages = [
  "assests/images/accueil/diaporama/20190114_122001 (1).jpg",
  "assests/images/accueil/diaporama/20190114_122016.jpg"
];

let heroIndex = 0;

function changeHeroBackground() {
  hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
  heroIndex = (heroIndex + 1) % heroImages.length;
}

if (hero) {
  changeHeroBackground(); // afficher la première
  setInterval(changeHeroBackground, 5000); // changer toutes les 5 sec
}

  