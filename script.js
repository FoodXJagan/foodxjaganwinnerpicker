// =========================
// AUTO YEAR
// =========================

document.getElementById("year").textContent =
new Date().getFullYear();


// =========================
// PROGRESS BAR ANIMATION
// =========================

window.addEventListener("load", () => {

    const progressBar =
    document.querySelector(".progress-bar");

    progressBar.style.width = "0%";

    setTimeout(() => {

        progressBar.style.width = "60%";

    }, 500);

});


// =========================
// COUNTDOWN TIMER
// =========================

// Set your launch date here




// =========================
// FADE-IN ANIMATION
// =========================

const elements =
document.querySelectorAll(
    ".logo, .left, .right, .bottom-card"
);

elements.forEach((element, index) => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(30px)";

    setTimeout(() => {

        element.style.transition =
        "all 1s ease";

        element.style.opacity = "1";

        element.style.transform =
        "translateY(0)";

    }, index * 300);

});


// =========================
// TITLE ANIMATION
// =========================

const titles = [

    "Food X Jagan | Coming Soon",

    "Food X Jagan | Under Development",

    "Food X Jagan | Launching Soon 🚀"

];

let titleIndex = 0;

setInterval(() => {

    document.title =
    titles[titleIndex];

    titleIndex++;

    if(titleIndex >= titles.length){

        titleIndex = 0;

    }

}, 3000);


// =========================
// BLINKING COMING SOON
// =========================

const comingSoon =
document.querySelector(".coming span");

setInterval(() => {

    if(comingSoon){

        comingSoon.style.opacity =
        comingSoon.style.opacity === "0.5"
        ? "1"
        : "0.5";

    }

}, 700);
