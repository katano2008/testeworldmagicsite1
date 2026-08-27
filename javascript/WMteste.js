/* =========================================
   MENU MOBILE
========================================= */

const menuButton =
    document.getElementById("menu-button");

const navbar =
    document.getElementById("navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon =
        menuButton.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* =========================================
   FECHAR MENU AO CLICAR
========================================= */

const navLinks =
    document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon =
            menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });

});


/* =========================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


document
    .querySelectorAll(
        ".about-card, .character-card, .section-heading"
    )
    .forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });


/* =========================================
   HEADER AO ROLAR
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.10)";

    } else {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.06)";

    }

});