/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


/* Close menu when link is clicked */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =========================
   HEADER ON SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   SCROLL ANIMATIONS
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   FOOD CATEGORY FILTER
========================= */

const categories =
    document.querySelectorAll(".category");

const foodCards =
    document.querySelectorAll(".food-card");


categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(button => {

            button.classList.remove("active");

        });

        category.classList.add("active");

        const selected =
            category.dataset.category;


        foodCards.forEach(card => {

            const type = card.dataset.type;

            if (
                selected === "all" ||
                selected === type
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   HEART BUTTONS
========================= */

const hearts =
    document.querySelectorAll(".heart");

hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        heart.classList.toggle("liked");

        if (heart.classList.contains("liked")) {

            heart.textContent = "♥";

        } else {

            heart.textContent = "♡";

        }

    });

});


/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
    document.getElementById("reservationForm");

const formMessage =
    document.getElementById("formMessage");


reservationForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const guests =
        document.getElementById("guests").value;


    formMessage.textContent =
        `Thank you, ${name}! Your request for ${guests} on ${date} at ${time} has been received.`;

    reservationForm.reset();

});


/* =========================
   SET MINIMUM DATE
========================= */

const dateInput =
    document.getElementById("date");

const today =
    new Date().toISOString().split("T")[0];

dateInput.min = today;