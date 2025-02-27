'use strict';

const alternarFuente = () => {
    const btnAlternarFuente = document.querySelector('#btnAlternarFuente');
    const body = document.body;

    btnAlternarFuente.addEventListener('click', () => {
        // Agrega la clase solo si el elemento no tiene alguna de las clases excluidas
        const elementosDeTexto = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, li');
        
        elementosDeTexto.forEach(elemento => {
            if (!elemento.classList.contains('menu-accesibilidad__titulo') &&
                !elemento.classList.contains('menu-accesibilidad-footer__titulo') &&
                !elemento.classList.contains('menu-accesibilidad-footer__texto') &&
                !elemento.classList.contains('menu-accesibilidad-body-boton__texto')) {
                elemento.classList.toggle('opdyslexic-font');
            }
        });
    });
};

export default alternarFuente;
