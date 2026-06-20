// =========================
// DATA STORAGE
// =========================

let participants = [];
let latestWinners = [];


// =========================
// ELEMENTS
// =========================

const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");

const participantCount =
document.getElementById("participantCount");

const participantList =
document.getElementById("participantList");

const winnerCount =
document.getElementById("winnerCount");

const pickWinnerBtn =
document.getElementById("pickWinnerBtn");

const winnerList =
document.getElementById("winnerList");


// =========================
// SUBMIT USERS
// =========================

submitBtn.addEventListener("click", () => {

    const rawUsers = userInput.value.trim();

    if(rawUsers === ""){

        alert("Please enter usernames");

        return;
    }

    participants = rawUsers
        .split("\n")
        .map(user => user.trim())
        .filter(user => user !== "");

    participants = [...new Set(participants)];

    displayParticipants();

});


// =========================
// DISPLAY PARTICIPANTS
// =========================

function displayParticipants(){

    participantList.innerHTML = "";

    participantCount.textContent =
    participants.length;

    // Update top stats card
    document.getElementById("participantStat").textContent =
    participants.length;

    participants.forEach((user,index)=>{

        const li =
        document.createElement("li");

        li.textContent =
        `${index + 1}. ${user}`;

        participantList.appendChild(li);

    });

}

// =========================
// PICK WINNERS
// =========================

pickWinnerBtn.addEventListener("click", () => {

    if(participants.length === 0){

        alert("Please submit users first");

        return;
    }

    const totalWinners =
    parseInt(winnerCount.value);

    if(
        isNaN(totalWinners) ||
        totalWinners < 1
    ){
        alert("Enter a valid winner count");
        return;
    }

    if(totalWinners > participants.length){

        alert(
            "Winner count exceeds participant count"
        );

        return;
    }

    // Create a copy

    const shuffled = [...participants];

// Triple shuffle for better randomness perception

    for(let round = 0; round < 3; round++){

        for(
            let i = shuffled.length - 1;
            i > 0;
            i--
        ){

            const j =
            Math.floor(
                Math.random() * (i + 1)
        );

            [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
        }
    }

// Pick winners

const winners = [];

while(
    winners.length < totalWinners
){

    const randomIndex =
    Math.floor(
        Math.random() * shuffled.length
    );

    winners.push(
        shuffled[randomIndex]
    );

    shuffled.splice(
        randomIndex,
        1
    );

}

/* DISPLAY RESULTS */

displayWinners(winners);

showWinnerPopup(winners);

});


// =========================
// DISPLAY WINNERS
// =========================

function displayWinners(winners){

    winnerList.innerHTML = "";

    // Update top winner stats card
    document.getElementById("winnerStat").textContent =
    winners.length;

    winners.forEach((winner,index)=>{

        const li =
        document.createElement("li");

        li.innerHTML =
        `🏆 Winner ${index + 1}: <strong>${winner}</strong>`;

        winnerList.appendChild(li);

    });

    latestWinners = winners;

}

function showWinnerPopup(winners){

    const popup =
    document.getElementById("winnerPopup");

    const popupWinnerList =
    document.getElementById("popupWinnerList");

    popupWinnerList.innerHTML = "";

    winners.forEach((winner,index)=>{

    setTimeout(() => {

        const winnerCard =
        document.createElement("div");

        winnerCard.className =
        "popup-winner reveal";

        winnerCard.innerHTML = `

            <div class="popup-rank">
                ${index + 1}
            </div>

            <div class="popup-name">
                ${winner}
            </div>

        `;

        popupWinnerList.appendChild(
            winnerCard
        );

    }, index * 800);

    });

    popup.style.display = "flex";
    launchConfetti();
    setTimeout(() => {

    closeWinnerPopup();

    }, 10000);

}

function closeWinnerPopup(){

    const popup =
    document.getElementById("winnerPopup");

    popup.style.display = "none";

}

document
.getElementById("closePopupBtn")
.addEventListener("click", () => {

    closeWinnerPopup();

});

const popupOverlay =
document.getElementById("winnerPopup");

popupOverlay.addEventListener("click", (e) => {

    if(
        e.target === popupOverlay
    ){

        closeWinnerPopup();

    }

});

document
.querySelector(".winner-popup-card")
.addEventListener("click", (e) => {

    e.stopPropagation();

});


// =========================
// CLEAR ALL
// =========================

clearBtn.addEventListener("click", () => {

    userInput.value = "";

    document.getElementById("participantStat").textContent = "0";

    document.getElementById("winnerStat").textContent = "0";

    participants = [];

    participantCount.textContent = "0";

    participantList.innerHTML = "";

    winnerList.innerHTML = "";

    winnerCount.value = 3;

});

function launchConfetti(){

    const container =
    document.getElementById(
        "confettiContainer"
    );

    container.innerHTML = "";

    for(let i=0;i<120;i++){

        const piece =
        document.createElement("div");

        piece.className =
        "confetti";

        piece.style.left =
        Math.random()*100 + "%";

        piece.style.animationDelay =
        Math.random()*2 + "s";

        piece.style.opacity =
        Math.random();

        container.appendChild(piece);

    }

}

// =========================
// DEVELOPER POPUP
// =========================

const developerBtn =
document.getElementById(
    "developerBtn"
);

const developerPopup =
document.getElementById(
    "developerPopup"
);

const closeDeveloperPopup =
document.getElementById(
    "closeDeveloperPopup"
);

developerBtn.addEventListener(
    "click",
    () => {

        developerPopup.style.display =
        "flex";

    }
);

closeDeveloperPopup.addEventListener(
    "click",
    () => {

        developerPopup.style.display =
        "none";

    }
);

developerPopup.addEventListener(
    "click",
    (e) => {

        if(
            e.target === developerPopup
        ){

            developerPopup.style.display =
            "none";

        }

    }
);

