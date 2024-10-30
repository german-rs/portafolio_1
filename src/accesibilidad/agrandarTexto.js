'use strict';

const obtenerElementosDeTexto = () => {
    return document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, li');
};

const obtenerTamaniosOriginales = (elementos) => {
    const tamanios = [];
    elementos.forEach(elemento => {
        const tamanioDeFuente = parseInt(window.getComputedStyle(elemento).fontSize);
        if (!elemento.classList.contains('menu-accesibilidad__titulo') &&
            !elemento.classList.contains('menu-accesibilidad-footer__texto') &&
            !elemento.classList.contains('menu-accesibilidad-body-boton__texto')) {
            tamanios.push({ elemento, tamanioDeFuente });
        }
    });
    return tamanios;
};

const aplicarAgrandamiento = (tamaniosOriginales, factor) => {
    tamaniosOriginales.forEach(item => {
        const nuevoTamanio = item.tamanioDeFuente * factor;
        item.elemento.style.fontSize = nuevoTamanio + 'px';
        console.log(`Aumentando ${item.elemento.tagName} a: ${nuevoTamanio}px`);
    });
};

const restablecerTamanioOriginal = (tamaniosOriginales) => {
    tamaniosOriginales.forEach(item => {
        item.elemento.style.fontSize = item.tamanioDeFuente + 'px';
        console.log(`Restableciendo ${item.elemento.tagName} a su tamaño original: ${item.tamanioDeFuente}px`);
    });
};

const actualizarTexto = (clics, aumentoPorcentaje) => {
    const porcentajes = [100, 133, 166, 200];
    aumentoPorcentaje.textContent = `${porcentajes[clics]}%`;
};

const agrandarTexto = () => {
    const btnAgrandarTexto = document.querySelector('#btnAgrandarTexto');
    const elementosDeTexto = obtenerElementosDeTexto();
    const aumentoPorcentaje = document.querySelector('.aumentoPorcentaje');
    const tamaniosOriginales = obtenerTamaniosOriginales(elementosDeTexto);

    let clics = 0;

    btnAgrandarTexto.addEventListener('click', () => {
        if (clics < 3) {
            const factor = 1 + ((clics + 1) / 3);
            aplicarAgrandamiento(tamaniosOriginales, factor);
            clics++;
        } else {
            restablecerTamanioOriginal(tamaniosOriginales);
            clics = 0;
        }

        actualizarTexto(clics, aumentoPorcentaje);
    });
};

export default agrandarTexto;