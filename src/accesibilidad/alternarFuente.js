const alternarFuente = () =>{

    const btnAlternarFuente = document.querySelector('#btnAlternarFuente');
    const body = document.body;

    btnAlternarFuente.addEventListener('click', () =>{

        if (body.style.fontFamily === '"OpenDyslexic", sans-serif') {
            body.style.fontFamily = '';
        } else {
            body.style.fontFamily = '"OpenDyslexic", sans-serif';
        }
    });
};

export default alternarFuente;