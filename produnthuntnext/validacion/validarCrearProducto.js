export default function validarCrearProducto(valores) {


    let errores = {};

    //Validar el nombre del usuario

    if(!valores.nombre){
        errores.nombre = 'El nombre es obligatorio'
    }
    
    // validar empresa

    if(!valores.empresa){
        errores.empresa = 'Nombre empresa es obligatorio'
    } 

    // validar url

    if(!valores.url){
        errores.url = 'Url es obligatorio'
    }else if ( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ){
        errores.url = 'No valido URL';
    } 

    //Validar descripcion

    if(!valores.descripcion){
        errores.descripcion = 'Agrega una descripcion de tu producto'        
    }

    return errores;

}