'use strict';

const alternarFuente = () => {
    const btnAlternarFuente = document.querySelector('#btnAlternarFuente');
    const body = document.body;

    btnAlternarFuente.addEventListener('click', () => {
        body.classList.toggle('opdyslexic-font');  
    });
};

export default alternarFuente;