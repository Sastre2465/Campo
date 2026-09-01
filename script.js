/* =============================================
   ANIMACIÓN AL HACER SCROLL
============================================= */

const elementos =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target
                .classList
                .add("visible");

            }

        });

    },

    {
        threshold:0.10
    }

);

elementos.forEach(elemento => {

    observer.observe(elemento);

});


/* =============================================
   BOTÓN PARA SUBIR
============================================= */

const arriba =
document.getElementById("arriba");

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 600){

            arriba.style.display =
            "block";

        }else{

            arriba.style.display =
            "none";

        }

    }
);

arriba.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    }
);


/* =============================================
   MOVIMIENTO DE TARJETAS FLOTANTES
============================================= */

const tarjetas =
document.querySelectorAll(".hero-card");

document.addEventListener(
    "mousemove",
    (e) => {

        const x =
        e.clientX /
        window.innerWidth -
        0.5;

        const y =
        e.clientY /
        window.innerHeight -
        0.5;


        tarjetas.forEach(
            (tarjeta,index) => {

                const movimiento =
                3 + index * 2;

                tarjeta.style.marginLeft =
                x * movimiento + "px";

                tarjeta.style.marginTop =
                y * movimiento + "px";

            }
        );

    }
);


/* =============================================
   EFECTO DEL MENÚ AL BAJAR
============================================= */

const menu =
document.querySelector("nav");

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 40){

            menu.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.12)";

        }else{

            menu.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.07)";

        }

    }
);


/* =============================================
   SCROLL SUAVE EN LOS ENLACES
============================================= */

const enlaces =
document.querySelectorAll('a[href^="#"]');

enlaces.forEach(enlace => {

    enlace.addEventListener(
        "click",
        function(e){

            const destino =
            document.querySelector(
                this.getAttribute("href")
            );

            if(destino){

                e.preventDefault();

                destino.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            }

        }
    );

});