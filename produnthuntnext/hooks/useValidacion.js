import React, {useState, useEffect} from 'react';

const useValidacion = (stateInicial, validar, fn) => {

    const [valores, guardarValores ] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);

    useEffect(() =>{

        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores){
                fn(); // Funcion que se ejecuta en el componente. 
            }
        }


    },[] )


    return(
        <h1>hola</h1>
    );



}