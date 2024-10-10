const paginaMonocromatica = () => {

    const btnPaginaMonocromatica = document.querySelector('#btnPaginaMonocromatica');
    const body = document.body;

    const alternarEscalaDeGris = () => {

        if (body.classList.contains('gray-scale')) {
            
            body.classList.remove('gray-scale');
        } else {
            
            body.classList.add('gray-scale');
        }
        
    }

    btnPaginaMonocromatica.addEventListener('click', alternarEscalaDeGris);

};

export default paginaMonocromatica;