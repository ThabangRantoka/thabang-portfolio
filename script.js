
// ========================================
// PREMIUM PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVIGATION

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    function closeMenu() {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    }

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    document.addEventListener("click", event => {

        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }

    });

    // AUTOMATIC COPYRIGHT YEAR

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // SCROLL REVEAL ANIMATIONS

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const animatedElements = document.querySelectorAll(`
        .section-heading,
        .skill-card,
        .stat-card,
        .project-card,
        .academic-card,
        .experience-card,
        .pipeline-card,
        .education-card,
        .certificate-card
    `);

    if ("IntersectionObserver" in window && !reducedMotion) {

        const revealObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.08
        });

        animatedElements.forEach(element => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    }

    // ACTIVE NAVIGATION LINKS

    const sections = document.querySelectorAll("main section[id]");

    const navigationLinks = document.querySelectorAll(".nav-links a");

    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            if (window.scrollY >= sectionTop - 150) {

                const sectionId = section.getAttribute("id");

                const hasNavigationLink = Array.from(navigationLinks)
                    .some(link => {
                        return link.getAttribute("href") === "#" + sectionId;
                    });

                if (hasNavigationLink) {
                    currentSection = sectionId;
                }

            }

        });

        navigationLinks.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );

        });

    }

    // BACK TO TOP BUTTON

    const backToTop = document.getElementById("backToTop");

    function handleScroll() {

        updateActiveNavigation();

        if (backToTop) {

            backToTop.classList.toggle(
                "show",
                window.scrollY > 500
            );

        }

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    handleScroll();

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: reducedMotion ? "auto" : "smooth"
            });

        });

    }

    // CLOSE MOBILE MENU WHEN RESIZING

    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {

            closeMenu();

        }

    });

    // PORTFOLIO INITIALIZED

    console.log("Thabang Rantoka | Full Stack Developer Portfolio");

    console.log("Portfolio initialized successfully.");

});