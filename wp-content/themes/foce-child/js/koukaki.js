const observerBanner = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animDebutDown');
            return;
        }
        // entry.target.classList.remove('animDebutDown');
    })
})
observerBanner.observe(document.querySelector(".banner"));

const observerMain = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animDebut');
            return;
        }
        // entry.target.classList.remove('animDebut');
    })
})
observerMain.observe(document.querySelector(".story"));

const observerStudio = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animDebut');
            return;
        }
        // entry.target.classList.remove('animDebut');
    })
})
observerStudio.observe(document.querySelector("#studio"));