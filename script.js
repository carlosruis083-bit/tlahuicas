// Tlahuicas Roller Hockey
// Pequeñas animaciones al entrar en pantalla

const elementos = document.querySelectorAll(
    ".gallery-item, .training-photo, .about-content, .schedule-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


elementos.forEach((elemento) => {

    observer.observe(elemento);

});