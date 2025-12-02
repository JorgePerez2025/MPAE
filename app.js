const hamburger = document.querySelector(".hamburger");
const navWrap = document.querySelector(".nav-wrap");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger && navWrap) {
    hamburger.addEventListener("click", () => {
        const isOpen = navWrap.classList.toggle("mobile-open");
        hamburger.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navWrap.classList.remove("mobile-open");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}
