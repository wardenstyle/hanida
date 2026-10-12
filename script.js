
document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const stage = document.getElementById("button-stage");
    const message = document.getElementById("tease-message");
    const hearts = document.getElementById("floating-hearts");

    let attempts = 0;
    let noButtonMoved = false;

    const teasingMessages = [
        "정말 확실해? 🤨",
        "아니, 믿을 수 없어! 🥺",
        "정말로 확실해? 💔",
        "마지막 기회야… ❤️",
        "나한테 제대로 속았네! 다시 해봐 😘",
        "너무 늦었어… 💋"
    ];

    // Le bouton "Oui"
    yesButton.addEventListener("click", () => {
        alert(
            "고마워, 진심으로. ❤️\n\n" +
            "사랑해.\n" +
            "우리 곧 다시 만나자. 💕"
        );

        createHearts(24);
    });

    // Le bouton "Non"
    noButton.addEventListener("click", (event) => {
        event.preventDefault();

        attempts++;

        if (attempts === 1) {
            message.textContent = teasingMessages[0];
        } else if (attempts === 2) {
            message.textContent = teasingMessages[1];
        } else if (attempts === 3) {
            message.textContent = teasingMessages[2];
        } else if (attempts === 4) {
            message.textContent = teasingMessages[3];
        } else {
            // Cinquième tentative : le bouton disparaît.
            message.textContent = teasingMessages[4];
            noButton.classList.add("gone");
            noButton.setAttribute("aria-hidden", "true");

            // Petit délai avant le message final.
            window.setTimeout(() => {
                message.textContent = teasingMessages[5];
                message.classList.remove("change");
                void message.offsetWidth;
                message.classList.add("change");
                createHearts(16);
            }, 1400);

            return;
        }

        message.classList.remove("change");
        void message.offsetWidth;
        message.classList.add("change");

        moveNoButton();
    });

    function moveNoButton() {
        const stageRect = stage.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        // On mémorise la position visuelle avant le passage en absolute.
        if (!noButtonMoved) {
            noButton.style.left =
                `${buttonRect.left - stageRect.left}px`;
            noButton.style.top =
                `${buttonRect.top - stageRect.top}px`;

            noButton.classList.add("moving");
            noButtonMoved = true;
        }

        const padding = 4;
        const maxX = Math.max(
            padding,
            stage.clientWidth - noButton.offsetWidth - padding
        );
        const maxY = Math.max(
            padding,
            stage.clientHeight - noButton.offsetHeight - padding
        );

        let x;
        let y;
        let tries = 0;

        // On évite autant que possible de recouvrir le bouton Oui.
        const yesRect = yesButton.getBoundingClientRect();

        do {
            x = padding + Math.random() * (maxX - padding);
            y = padding + Math.random() * (maxY - padding);
            tries++;
        } while (
            tries < 30 &&
            overlapsYesButton(x, y, yesRect, stageRect)
        );

        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    function overlapsYesButton(x, y, yesRect, stageRect) {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const yesLeft = yesRect.left - stageRect.left;
        const yesTop = yesRect.top - stageRect.top;
        const yesRight = yesLeft + yesRect.width;
        const yesBottom = yesTop + yesRect.height;

        return (
            x < yesRight &&
            x + buttonWidth > yesLeft &&
            y < yesBottom &&
            y + buttonHeight > yesTop
        );
    }

    function createHearts(count) {
        for (let i = 0; i < count; i++) {
            const heart = document.createElement("span");
            heart.className = "floating-heart";
            heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 1.2}s`;
            heart.style.fontSize = `${14 + Math.random() * 22}px`;

            hearts.appendChild(heart);

            window.setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }
});
