// ==========================================
// BIRTHDAY WEBSITE SETTINGS
// ==========================================

const HER_NAME = "Joyeeta";


// ==========================================
// WAIT UNTIL HTML IS READY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------------
    // GET HTML ELEMENTS
    // --------------------------------------

    const pages = document.querySelectorAll(".page");

    const nextButtons =
        document.querySelectorAll(".next-btn");

    const restartButton =
        document.querySelector(".restart-btn");

    const dotsContainer =
        document.querySelector(".dots");


    // --------------------------------------
    // ADD HER NAME
    // --------------------------------------

    const herNameElement =
        document.getElementById("herName");

    const finalNameElement =
        document.getElementById("finalName");


    if (herNameElement) {
        herNameElement.textContent = HER_NAME;
    }

    if (finalNameElement) {
        finalNameElement.textContent = HER_NAME;
    }


    // --------------------------------------
    // CURRENT PAGE
    // --------------------------------------

    let currentPage = 0;


    // --------------------------------------
    // CREATE PAGE DOTS
    // --------------------------------------

    pages.forEach((page, index) => {

        const dot =
            document.createElement("button");

        dot.type = "button";

        dot.setAttribute(
            "aria-label",
            `Go to page ${index + 1}`
        );

        dot.addEventListener(
            "click",
            () => showPage(index)
        );

        dotsContainer.appendChild(dot);

    });


    const dots =
        dotsContainer.querySelectorAll("button");


    // --------------------------------------
    // SHOW PAGE
    // --------------------------------------

    function showPage(index) {

        if (index < 0) {
            index = pages.length - 1;
        }

        if (index >= pages.length) {
            index = 0;
        }


        currentPage = index;


        pages.forEach((page, i) => {

            page.classList.toggle(
                "active",
                i === currentPage
            );

        });


        dots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentPage
            );

        });

    }


    // --------------------------------------
    // SPRINKLE BURST
    // --------------------------------------

    function createSprinkleBurst(button) {

        const rect =
            button.getBoundingClientRect();


        const sprinkleCount = 35;


        for (let i = 0; i < sprinkleCount; i++) {

            const sprinkle =
                document.createElement("span");

            sprinkle.className =
                "click-sprinkle";


            // Start from the button
            sprinkle.style.left =
                rect.left + rect.width / 2 + "px";

            sprinkle.style.top =
                rect.top + rect.height / 2 + "px";


            // Random direction
            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                80 + Math.random() * 140;


            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;


            sprinkle.style.setProperty(
                "--x",
                x + "px"
            );

            sprinkle.style.setProperty(
                "--y",
                y + "px"
            );


            // Random rotation
            sprinkle.style.setProperty(
                "--rotation",
                Math.random() * 720 - 360 + "deg"
            );


            // Random size
            const size =
                5 + Math.random() * 7;

            sprinkle.style.width =
                size + "px";

            sprinkle.style.height =
                size * 0.45 + "px";


            // Different sprinkle colors
            const colors = [
                "#ff6b9d",
                "#ffb6c1",
                "#ffd166",
                "#c77dff",
                "#ff85a1",
                "#ffffff"
            ];

            sprinkle.style.background =
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ];


            document.body.appendChild(
                sprinkle
            );


            // Remove after animation
            setTimeout(
                () => sprinkle.remove(),
                900
            );

        }

    }


    // --------------------------------------
    // NEXT BUTTONS
    // --------------------------------------

    nextButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                // Sprinkle burst
                createSprinkleBurst(button);


                showPage(
                    currentPage + 1
                );

            }
        );

    });


    // --------------------------------------
    // RESTART BUTTON
    // --------------------------------------

    if (restartButton) {

        restartButton.addEventListener(
            "click",
            () => {

                showPage(0);

            }
        );

    }


    // --------------------------------------
    // KEYBOARD NAVIGATION
    // --------------------------------------

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "ArrowRight" ||
                event.key === " "
            ) {

                showPage(
                    currentPage + 1
                );

            }


            if (event.key === "ArrowLeft") {

                showPage(
                    currentPage - 1
                );

            }

        }
    );


    // --------------------------------------
    // FLOATING HEARTS
    // --------------------------------------

    function createHeart() {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > 0.5
                ? "♥"
                : "✦";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            10 + Math.random() * 20 + "px";


        heart.style.animationDuration =
            5 + Math.random() * 5 + "s";


        document.body.appendChild(heart);


        setTimeout(
            () => heart.remove(),
            10000
        );

    }


    setInterval(
        createHeart,
        700
    );


    // --------------------------------------
    // START WEBSITE
    // --------------------------------------

    showPage(0);

});
