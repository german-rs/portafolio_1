const agrandarTexto = () => {

    const btnAgrandarTexto = document.querySelector('.menu-accesibilidad-body__boton');
    const elementosDeTexto = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, li');
    const aumentoPorcentaje = document.querySelector('.aumentoPorcentaje');
    const tamaniosOriginales = [];

    
    elementosDeTexto.forEach(elemento => {
        const tamanioDeFuente = window.getComputedStyle(elemento).fontSize;
        
        if (!elemento.classList.contains('menu-accesibilidad__titulo') && 
            !elemento.classList.contains('menu-accesibilidad-footer__texto') && 
            !elemento.classList.contains('menu-accesibilidad-body-boton__texto')) {
            tamaniosOriginales.push({ elemento: elemento, tamanioDeFuente: parseInt(tamanioDeFuente) });
        }
    });

    let clics = 0;

    btnAgrandarTexto.addEventListener('click', () => {
        if (clics < 3) { 
            tamaniosOriginales.forEach(item => {
                let elemento = item.elemento;
                let tamanioOriginal = item.tamanioDeFuente;
                let nuevoTamanio = tamanioOriginal * (1 + ((clics + 1) / 3));
                
                elemento.style.fontSize = nuevoTamanio + 'px';
                console.log(`Aumentando ${elemento.tagName} a: ${nuevoTamanio}px`);
            });

            clics++;  
            
        } else {
            tamaniosOriginales.forEach(item => {
                let elemento = item.elemento;
                let tamanioOriginal = item.tamanioDeFuente;
                elemento.style.fontSize = tamanioOriginal + 'px';
                console.log(`Restableciendo ${elemento.tagName} a su tamaño original: ${tamanioOriginal}px`);
            });
            clics = 0;
        }

        actualizarTexto(clics);
    });

    const actualizarTexto = (click) => {
        let porcentaje = 100;

        if (click === 1) {
            porcentaje = 133;
        } else if (click === 2) {
            porcentaje = 166;
        } else if (click === 3) {
            porcentaje = 200;
        } else if (click == 0){
            porcentaje = 100; 
        }

        aumentoPorcentaje.textContent = `${porcentaje}%`;
    }

};





export default agrandarTexto;