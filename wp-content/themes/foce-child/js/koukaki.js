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

function isElementVisible(Element) {
  const rect = Element.getBoundingClientRect();
  const y = rect.top;
  const windowHeight = window.innerHeight;

  return y < windowHeight * 0.85;
}

function animateIfVisible(Element, divElement, className) {
  if (isElementVisible(Element)) {
    divElement.classList.add(className);
  } else {
    divElement.classList.remove(className);
  }
}

// Utilisation de la fonction de test et de la fonction d'animation
function fadeinAnim() {
  animateIfVisible(sectionBanner, divBanner, "fadeDebutDown");
  animateIfVisible(sectionStory, divStory, "animDebut");
  animateIfVisible(sectionStory, spanStoryTitle, "animStoryTitle");
  animateIfVisible(sectionStudio, divStudio, "animDebut");
  animateIfVisible(sectionStudio, divStudio, "animDebut");
  animateIfVisible(sectionStudio, spanTitleA, "animTitle_A");
  animateIfVisible(sectionStudio, spanTitleB, "animTitle_B");
}

// Modification de la position des nuages lors du scroll
let divClouds = document.querySelector(".clouds");
let rightClouds = 0;

function cloudsPosition(Tag) {
  if (isElementVisible(Tag)) {
    let rectClouds = Tag.getBoundingClientRect();
    let yClouds = rectClouds.top;
    let styleClouds = Tag.style[0];
    let fenetreHeight = window.innerHeight;
    let fenetreWidht = window.innerWidth;
    rightClouds = fenetreHeight * 0.85 - yClouds;
    if (rightClouds > (fenetreWidht * 0.4)) {
      rightClouds = fenetreWidht * 0.4;
    }
    console.log ("right Clouds = ",rightClouds);
    console.log("y Clouds = ",yClouds);
    console.log("fenetre Height = ",fenetreHeight);
    console.log("fenetre Widht = ",fenetreWidht);
    Tag.setAttribute('style', styleClouds + ': ' + rightClouds + 'px');
  }
}

function cloudsAnim() {
  cloudsPosition (divClouds);
}

["load", "resize", "scroll"].forEach((events) => window.addEventListener(events, fadeinAnim));
["load", "resize", "scroll"].forEach((evenements) => window.addEventListener(evenements, cloudsAnim));

// Masquage du menu mobile lors du clic
const Navigation = document.querySelector("#site-navigation");
const button = document.querySelector(".menu-toggle");
const fullNav = document.querySelector("#site-navigation ul");
fullNav.addEventListener("click", function () {
  Navigation.classList.remove("toggled");
  button.setAttribute("aria-expanded", "false");
});

// function fadeinAnim() {
//     let bannerRect = sectionBanner.getBoundingClientRect();
//     let bannerY = bannerRect.top;
//     let storyRect = sectionStory.getBoundingClientRect();
//     let storyY = storyRect.top;
//     let studioRect = sectionStudio.getBoundingClientRect();
//     let studioY = studioRect.top;
//     let windowHeight = window.innerHeight;
//     // let windowScroll = window.scrollY;
//     // console.log("position élément= ",storyY);
//     // console.log("hauteur fenêtre= ",windowHeight);
//     // console.log("top= ",windowScroll);
//     if (bannerY < (windowHeight * .85)) {
//         divBanner.classList.add('fadeDebutDown');
//     }
//     else {
//         sectionBanner.classList.remove('fadeDebutDown');
//     }
//     if (storyY < (windowHeight * .85)) {
//         divStory.classList.add('animDebut');
//     }
//     else {
//         divStory.classList.remove('animDebut');
//     }
//     if (studioY < (windowHeight * .85)) {
//         divStudio.classList.add('animDebut');
//     }
//     else {
//         divStudio.classList.remove('animDebut');
//     }
// }

// // window.addEventListener('load',fadeinAnimOK);
// // window.addEventListener('resize',fadeinAnimOK);
// // window.addEventListener('scroll',fadeinAnimOK);
