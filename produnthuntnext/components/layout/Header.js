import React from "react";
import Link from 'next/link'
import Buscar from '../ui/Buscar'
import Navegacion from './Navegacion'
const Header = props => {

    return(

        <header>
            <div>
                <div>
                    <p>P</p>
                    <Buscar />
                    

                   <Navegacion />
                </div>
                <div>
                    <p>Hola Eduardo</p>
                    <button type="button"> Cerrar Sesion </button>
                    <Link href='/'>Login</Link>
                    <Link href='/'>Crear Cuenta</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;