'use strict';

const ampliarCursor = () => {

    const btnAmpliarCursor = document.querySelector('#btnAmpliarCursor');
    let esElCursorGrande = false;

    btnAmpliarCursor.addEventListener('click', () =>{
        if (esElCursorGrande) {
            document.body.classList.remove('large-cursor'); 
          } else {
            document.body.classList.add('large-cursor'); 
          }
          esElCursorGrande = !esElCursorGrande; 
    });
};

export default ampliarCursor;