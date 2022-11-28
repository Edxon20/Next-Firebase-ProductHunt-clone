import React from "react";
import Link from 'next/link'
import Buscar from '../ui/Buscar'

const Header = props => {

    return(

        <header>
            <div>
                <div>
                    <p>P</p>
                    <Buscar />
                    {/* Buscador aqui */}

                    {/* Nav aqui */}
                </div>
                <div>
                    {/* Menu de administracion */}
                </div>
            </div>
        </header>
    );
}

export default Header;