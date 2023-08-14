// const observerBanner = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animDebutDown');
//             return;
//         }
//         // entry.target.classList.remove('animDebutDown');
//     })
// })
// observerBanner.observe(document.querySelector(".banner"));

// const observerMain = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animDebut');
//             return;
//         }
//         // entry.target.classList.remove('animDebut');
//     })
// })
// observerMain.observe(document.querySelector(".story"));

// const observerStudio = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animDebut');
//             return;
//         }
//         // entry.target.classList.remove('animDebut');
//     })
// })
// observerStudio.observe(document.querySelector("#studio"));

let sectionStudio = document.querySelector("#story");
let rectStudio = sectionStudio.getBoundingClientRect();
let posXsectionStudio = rectStudio.right;
let posYsectionStudio = rectStudio.top;
let windowHeight = window.innerHeight;
let windowScroll = window.scrollY;

console.log("top= ",posYsectionStudio);
console.log("hauteur fenêtre= ",windowHeight);
console.log("position fenêtre= ",windowScroll);

// while (posYsectionStudio < 3000) {
//     console.log(posXsectionStudio,posYsectionStudio);
// }
