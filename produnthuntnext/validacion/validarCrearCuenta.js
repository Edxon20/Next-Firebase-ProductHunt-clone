export default function validarCrearCuenta(valores) {


    let errores = {};

    //Validar el nombre del usuario

    if(!valores.nombre){
        errores.nombre = 'El nombre es obligatorio'
    }

    // validar Email
    if(!valores.email){
        errores.email = 'El email es obligatorio'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errores.email = 'Email no valido'
    }

    // validar password

    if(!valores.password){
        errores.password = 'El password es obligatorio'
    } else if(valores.password.length < 6){
        errores.password = 'El password debe ser de mas de 5 caracteres'
    }

    return errores;

}