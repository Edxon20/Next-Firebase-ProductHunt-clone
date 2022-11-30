import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    // Registrar un nuevo usuario
    async registrar(name, email, password) {
            const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

            return await nuevoUsuario.user.updateProfile({
                displayName : name
            })
    }

    // Inicia sesion del usuario 
    async login(email, password){
                //Funcion en la documentacion de firebase
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Cierra la sesion del usuario

    async cerrarSesion(){
        await this.auth.signOut();
    }

    

   
}

const firebase = new Firebase();
export default firebase;