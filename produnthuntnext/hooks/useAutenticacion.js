import React, {useEffect, useState} from 'react';
import firebase from '../firebase';

function useAutenticacion () {

    //Firebase guarda el usuario autenticado
    const [ usuarioAutenticado, setUser ] = useState(null);
    useEffect(() =>{
        const unsuscribe = firebase.auth.onAuthStateChanged(user =>{
            if( user ){
                setUser(user)
            }else{
                setUser(null)
            }
        });
        return () => unsuscribe();        
    }, []);

    return usuarioAutenticado;
}

export default useAutenticacion;