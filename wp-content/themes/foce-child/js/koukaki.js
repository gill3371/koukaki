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


// function fadeinAnim ($arg,$anim) {
    //     let rectArg = $arg.getBoundingClientRect();
    //     let posY = rectArg.top;
    //     let bottomElement = rectArg.bottom;
    //     let windowHeight = window.innerHeight;
    //     let windowScroll = window.scrollY;
    //     console.log("top= ",windowScroll);
    //     console.log("hauteur fenêtre= ",windowHeight);
    //     console.log("position élément= ",posY);
    //     console.log("hauteur élément= ",posY-bottomElement);
    //     if (posY < (windowHeight * .7)) {
        //         $arg.classList.add('fadeDebut');
        //     }
        //     else {
            //         $arg.classList.remove($anim);
            //     }
            // }
            
var s = skrollr.init();
            
let sectionBanner = document.querySelector(".banner");
let divBanner = document.querySelector(".bannerDiv");
let sectionStory = document.querySelector("#story");
let divStory = document.querySelector(".storyDiv");
let sectionStudio = document.querySelector("#studio");
let divStudio = document.querySelector(".studioDiv");

function fadeinAnim() {
    let bannerRect = sectionBanner.getBoundingClientRect();
    let bannerY = bannerRect.top;
    let storyRect = sectionStory.getBoundingClientRect();
    let storyY = storyRect.top;
    let studioRect = sectionStudio.getBoundingClientRect();
    let studioY = studioRect.top;
    let windowHeight = window.innerHeight;
    // let windowScroll = window.scrollY;
    console.log("position élément= ",storyY);
    console.log("hauteur fenêtre= ",windowHeight);
    // console.log("top= ",windowScroll);
    if (bannerY < (windowHeight * .85)) {
        divBanner.classList.add('fadeDebutDown');
    }
    else {
        sectionBanner.classList.remove('fadeDebutDown');
    }
    if (storyY < (windowHeight * .85)) {
        divStory.classList.add('animDebut');
    }
    else {
        divStory.classList.remove('animDebut');
    }
    if (studioY < (windowHeight * .85)) {
        divStudio.classList.add('animDebut');
    }
    else {
        divStudio.classList.remove('animDebut');
    }
}

// window.addEventListener('load',fadeinAnimOK);
// window.addEventListener('resize',fadeinAnimOK);
// window.addEventListener('scroll',fadeinAnimOK);
['load','resize','scroll'].forEach(events => window.addEventListener(events, fadeinAnim));

