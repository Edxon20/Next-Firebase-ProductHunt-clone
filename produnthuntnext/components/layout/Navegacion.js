import React from "react";
import Link from 'next/link'
import styled from '@emotion/styled'

const Nav = styled.nav`

    padding-left: 2rem;

    a{
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gray2);
        font-family: 'Times New Roman', Times, serif;

        &:last-of-type{
            margin-right: 0;
        }

    }

`;

const Navegacion = props => {

    return(
        <Nav>
            <Link href="/">Inicio</Link>
            <Link href="/">Populares</Link>
            <Link href="/">Nuevo Producto</Link>

        </Nav>
    );
}

export default Navegacion;