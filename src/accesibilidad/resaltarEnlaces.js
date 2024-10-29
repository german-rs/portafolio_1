const resaltarEnlaces = () => {
    const btnResaltarEnlaces = document.querySelector('#btnResaltarEnlaces');
    const enlaceMenuAcc = 'menu-accesibilidad-footer__enlace'; 
    const enlaces = document.querySelectorAll('a');
    let estaDestacado = false;

    btnResaltarEnlaces.addEventListener('click', () => {
        estaDestacado = !estaDestacado;

        enlaces.forEach((enlace) => {
            if (!enlace.classList.contains(enlaceMenuAcc)) {
                if (estaDestacado) {
                    enlace.style.backgroundColor = '#000000';
                    enlace.style.color = 'yellow';
                    enlace.style.textDecoration = 'underline';
                } else {
                    enlace.style.backgroundColor = '';
                    enlace.style.color = '';
                    enlace.style.textDecoration = 'none';
                }
            }
        });
    });
};

export default resaltarEnlaces;
