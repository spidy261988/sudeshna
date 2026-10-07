const startButton = document.getElementById("startButton");
const answerButton = document.getElementById("answerButton");

const journey = document.getElementById("journey");
const finalMessage = document.getElementById("finalMessage");
const answer = document.getElementById("answer");


// Start the journey
startButton.addEventListener("click", () => {

    journey.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    startButton.textContent = "Our Journey ❤️";
});


// Reveal the answer
answerButton.addEventListener("click", () => {

    answer.classList.remove("hidden");

    answerButton.textContent = "You already knew that 😄";
    answerButton.disabled = true;

    // Give the message a moment to appear
    setTimeout(() => {

        finalMessage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 1000);
});

// Country memories

const countryCards =
    document.querySelectorAll(".country-card");

const memoryBox =
    document.getElementById("memoryBox");


countryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const country =
            card.dataset.country;

        const memory =
            card.dataset.memory;

        const photo =
            card.dataset.photo;

        const date =
            card.dataset.date;

        const number =
            card.dataset.number;


        memoryBox.innerHTML = `

            <img
                src="${photo}"
                alt="${country}"
                class="memory-photo"
            >

            <div class="memory-content">

                <span class="memory-number">
                    COUNTRY #${number}
                </span>

                <h3>
                    ${country}
                </h3>

                <p>
                    ${memory}
                </p>

                <small>
                    ${date}
                </small>

            </div>

        `;


        memoryBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});