            
let s = skrollr.init();

// Debug Skrollr - suppression style height balise body
const tagBody= document.querySelector("body");
tagBody.style.height = null;

// Initialisation de Swiper
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
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
    
    return y < (windowHeight * 0.85);
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
    animateIfVisible(sectionBanner, divBanner, 'fadeDebutDown');
    animateIfVisible(sectionStory, divStory, 'animDebut');
    animateIfVisible(sectionStory, spanStoryTitle, 'animStoryTitle');
    animateIfVisible(sectionStudio, divStudio, 'animDebut');
    animateIfVisible(sectionStudio, divStudio, 'animDebut');
    animateIfVisible(sectionStudio, spanTitleA, 'animTitle_A');
    animateIfVisible(sectionStudio, spanTitleB, 'animTitle_B');
}

['load','resize','scroll'].forEach(events => window.addEventListener(events, fadeinAnim));


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