'use strict';

let estaLeyendo = false; 
let vozActiva = false; 

function configurarCheckbox() {
    const casillaActivarVoz = document.querySelector('#casillaActivarVoz');

    casillaActivarVoz.addEventListener('change', () => {
        vozActiva = casillaActivarVoz.checked;

        if (!vozActiva) {
            window.speechSynthesis.cancel();
        }
    });
}

/**
 * Función que realiza la lectura del texto de un elemento dado.
 * @param {HTMLElement} elemento - El elemento cuyo texto será leído.
 */
function leerTexto(elemento) {
    if (estaLeyendo || !vozActiva) return;
    
    estaLeyendo = true; 
    const pronunciacion = new SpeechSynthesisUtterance(elemento.innerText);

   
    pronunciacion.lang = 'es-ES'; 
    pronunciacion.pitch = 1; 
    pronunciacion.rate = 1; 

    
    pronunciacion.onend = () => {
        estaLeyendo = false; 
    };

    window.speechSynthesis.speak(pronunciacion);
}

/**
 * Función para gestionar los eventos de click y focus en todos los elementos de la página.
 * @param {NodeListOf<HTMLElement>} elementos - La lista de elementos a los que se asignarán los eventos.
 */
function agregarEventosALosElementos(elementos) {
    function gestionarLectura(event) {
        if (vozActiva) {
            leerTexto(event.currentTarget);
        }
    }
    elementos.forEach(elemento => {
        elemento.addEventListener('click', gestionarLectura);
        elemento.addEventListener('focus', gestionarLectura); 
    });
}

function lecturaDePagina() {
    const elementos = document.querySelectorAll('body *');
    configurarCheckbox();
    agregarEventosALosElementos(elementos);
}

document.addEventListener('DOMContentLoaded', lecturaDePagina);

export default lecturaDePagina;
