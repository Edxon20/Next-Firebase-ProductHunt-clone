import React from "react";
import Link from 'next/link'
import Buscar from '../ui/Buscar'
import Navegacion from './Navegacion'
import styled from '@emotion/styled'
import { css } from '@emotion/react';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`

    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-right: 2rem;

`;


const Header = props => {

    return(

        <header
            css={css`
                border-bottom: 2px solid var(--gray3);
                         //up/donw --- left-right
                padding: 1rem 0;
            `}
        >            
            <ContenedorHeader>
                <div>
                    <Logo>P</Logo>
                    <Buscar />
                    

                   <Navegacion />
                </div>
                <div>
                    <p>Hola Eduardo</p>
                    <button type="button"> Cerrar Sesion </button>
                    <Link href='/'>Login</Link>
                    <Link href='/'>Crear Cuenta</Link>
                </div>
            </ContenedorHeader>
        </header>
    );
}

export default Header;