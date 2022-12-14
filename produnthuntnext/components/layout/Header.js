import React, {useContext} from "react";
import Link from 'next/link'
import Buscar from '../ui/Buscar'
import Navegacion from './Navegacion'
import styled from '@emotion/styled'
import { css } from '@emotion/react';
import Boton from '../ui/Boton';
//En app se mueve todo esto. 
import {FirebaseContext} from '../../firebase';

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

    const {usuario, firebase} = useContext(FirebaseContext)

    return (

        <header
            css={css`
                border-bottom: 2px solid var(--gray3);
                         //up/donw --- left-right
                padding: 1rem 0;
            `}
        >
            <ContenedorHeader>
                <div
                    css={css`
                        display: flex;
                        align-items: center;                        
                        
                    `}
                >
                    <Logo>P</Logo>
                    <Buscar />


                    <Navegacion />
                </div>
                <div
                    css={css`
                        display:flex;
                        align-items:center;
                    `}
                >
                    {usuario ?
                        (
                            <>
                                <p
                                    css={css`
                            margin-right:2rem;
                            
                        `}
                                > Hola: {usuario.displayName}</p>
                                <Boton
                                    bgColor={true}
                                    onClick={() => firebase.cerrarSesion()}
                                > Cerrar Sesion </Boton>
                            </>
                        )
                        : (
                            <>
                                <Link href='/login'>
                                    <Boton
                                        bgColor={true}
                                    >Login</Boton>
                                </Link>
                                <Link href='/crear-cuenta'>
                                    <Boton
                                        
                                        
                                    >Crear Cuenta</Boton>
                                </Link>
                            </>
                        )}
                </div>
            </ContenedorHeader>
        </header>
    );
}

export default Header;