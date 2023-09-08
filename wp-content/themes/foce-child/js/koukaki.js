// Initialisation de SkrollR
let s = skrollr.init();

// Debug Skrollr - suppression style height balise body
const tagBody = document.querySelector("body");
tagBody.style.height = null;

// Initialisation de Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  loopedSlides: 2,
  loopAdditionalSlides: 4,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

// // Déclaration des variables
let sectionBanner = document.querySelector(".banner");
let divBanner = document.querySelector(".bannerDiv");
let sectionStory = document.querySelector("#story");
let divStory = document.querySelector(".storyDiv");
let sectionStudio = document.querySelector("#studio");
let divStudio = document.querySelector(".studioDiv");

let spanTitleA = document.querySelector(".title_A");
let spanTitleB = document.querySelector(".title_B");
let spanStoryTitle = document.querySelector(".storyTitle");

// fonction de test de visibilité de l'élement en paramètre
function isElementVisible(Element) {
  const rect = Element.getBoundingClientRect();
  const y = rect.top;
  const windowHeight = window.innerHeight;
  
  return y < windowHeight * 0.85;
}

// fonction d'ajout de la class à l'élement de la section 
function animateIfVisible(element, divElement, className) {
  divElement.classList.toggle(className, isElementVisible(element));
}

// Fonction d'animation des différents éléments ciblés
function fadeinAnim() {
  [[sectionBanner, divBanner, "fadeDebutDown"],
  [sectionStory, divStory, "animDebut"],
  [sectionStory, spanStoryTitle, "animStoryTitle"], 
  [sectionStudio, divStudio, "animDebut"],
  [sectionStudio, divStudio, "animDebut"],
  [sectionStudio, spanTitleA, "animTitle_A"],
  [sectionStudio, spanTitleB, "animTitle_B"]]
  .forEach((Elements) => animateIfVisible(Elements[0],Elements[1],Elements[2]));
}

// Modification de la position des nuages lors du scroll
let divClouds = document.querySelector(".clouds");
let rightClouds;

function cloudsPosition(Tag) {
  if (isElementVisible(Tag)) {
    let rectClouds = Tag.getBoundingClientRect();
    let yClouds = rectClouds.top; 
    let styleClouds = Tag.style[0]; 
    let fenetreHeight = window.innerHeight;
    rightClouds = 50 + (fenetreHeight * 0.85 - yClouds) * 0.5; //Définition de la position du nuage
    if (rightClouds > 350) {
      rightClouds = 350;
    } // Test pour limiter le mouvement du nuage
    Tag.setAttribute('style', styleClouds + ': ' + rightClouds + 'px');
  }
}

function cloudsAnim() {
  cloudsPosition (divClouds);
}

["load", "resize", "scroll"].forEach((event) => {
  window.addEventListener(event, () => {
    fadeinAnim();
    cloudsAnim();
  });
});

// Masquage du menu mobile lors du clic
const Navigation = document.querySelector("#site-navigation");
const button = document.querySelector(".menu-toggle");
const fullNav = document.querySelector("#site-navigation ul");
fullNav.addEventListener("click", function () {
  Navigation.classList.remove("toggled");
  button.setAttribute("aria-expanded", "false");
});
