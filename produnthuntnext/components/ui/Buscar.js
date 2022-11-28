import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";
import Router from "next/router";

const InputText = styled.input`
    border: 1px solid var(--gray3);
    padding: 1rem;
    min-width: 300px;
`;

const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1.75px;
    background-color: white;
    border: none;
    text-indent: -9999px;
    &:hover {
        cursor: pointer;
    }
`;

const Buscar = () => {

    const [ Buscar, setBuscar ] = useState('');

    const BuscarProduct = e => {
        e.preventDefault();

        if (Buscar.trim() === '') return;

        // Redirect user
        Router.push({
            pathname: '/Buscar',
            query: {
                q: Buscar
            }
        })


    }

    return (  
        <form
            css={css`
                position: relative;
            `}
            onSubmit={BuscarProduct}
        >
            <InputText 
                type="text"
                placeholder="Find Products"
                onChange={e => setBuscar(e.target.value)}
            />

            <InputSubmit type="submit">Buscar</InputSubmit>
        </form>
    );
}
 
export default Buscar;