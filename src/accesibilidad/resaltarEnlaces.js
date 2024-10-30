'use strict';

const resaltarEnlaces = () => {
    const btnResaltarEnlaces = document.querySelector('#btnResaltarEnlaces');
    const enlaces = document.querySelectorAll('a');
    const claseDestacado = 'enlace-destacado'; 
    const claseExclusion = 'menu-accesibilidad-footer__enlace'; 
    let estaDestacado = false;

    const estilo = document.createElement('style');
    estilo.innerHTML = `
        .${claseDestacado} {
            background-color: #000000;
            color: yellow;
            text-decoration: underline;
        }
    `;
    document.head.appendChild(estilo);

    btnResaltarEnlaces.addEventListener('click', () => {
        estaDestacado = !estaDestacado;

        enlaces.forEach((enlace) => {
            if (!enlace.classList.contains(claseExclusion)) {
                enlace.classList.toggle(claseDestacado, estaDestacado);
            }
        });
    });
};

export default resaltarEnlaces;