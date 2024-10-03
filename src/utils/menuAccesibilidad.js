const menuAccesibilidad = () => {

    let accesibilidad = document.querySelector('.accesibilidad');
    let menuAccesibilidad = document.querySelector('.menu-accesibilidad');
    let cerrarMenu = document.querySelector('.menu-accesibilidad__cerrar');

    function alternarVisibilidadMenu() {
        if (menuAccesibilidad.style.display === 'block') {
            menuAccesibilidad.style.display = 'none';
        } else {
            menuAccesibilidad.style.display = 'block';
        }
    }

    accesibilidad.addEventListener('click', alternarVisibilidadMenu);
    
    cerrarMenu.addEventListener('click', alternarVisibilidadMenu);
}

export default menuAccesibilidad;