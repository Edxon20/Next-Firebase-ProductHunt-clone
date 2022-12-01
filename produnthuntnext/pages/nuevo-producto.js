import React, { useState } from 'react'
import Router from 'next/router';
import Layout from '../components/layout/Layout'
import { Error, Campo, Form, InputSubmit } from '../components/ui/Formulario'
import { css } from "@emotion/react"


import firebase from '../firebase'
//validaciones
import useValidacion from '../hooks/useValidacion'
import validarCrearProducto from '../validacion/validarCrearProducto'

const STATE_INITIAL = {
  nombre: '',
  empresa: '',
  imagen: '',
  url: '',
  descripcion: '',
}


const NuevoProducto = () => {

  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INITIAL, validarCrearProducto, crearCuenta);

  const { nombre, empresa, imagen, url, descripcion } = valores;

  async function crearCuenta() {
   
  }
  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
                text-align: center;
                margin-top: 5rem;
            `}
          >Nuevo Producto</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
            <fieldset>
              <legend>Informacion General</legend>
                <Campo>
                  <label htmlFor='nombre' >nombre</label>
                  <input
                    type='text'
                    id='nombre'
                    placeholder='Tu nombre'
                    name='nombre'
                    value={nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.nombre && <Error>{errores.nombre}</Error>}

                <Campo>
                  <label htmlFor='empresa' >Empresa</label>
                  <input
                    type='text'
                    id='empresa'
                    placeholder='Nombre Empresa'
                    name='empresa'
                    value={empresa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.empresa && <Error>{errores.empresa}</Error>}

                <Campo>
                  <label htmlFor='imagen' >Imagen</label>
                  <input
                    type='file'
                    id='imagen'
                    name='imagen'
                    value={imagen}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.imagen && <Error>{errores.imagen}</Error>}

                <Campo>
                  <label htmlFor='url' >url</label>
                  <input
                    type='url'
                    id='url'
                    name='url'
                    value={url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.url && <Error>{errores.url}</Error>}
              
            </fieldset>

            <fieldset>
              <legend>Sobre tu producto</legend>
                <Campo>
                  <label htmlFor='nombre' >Descripcion</label>
                  <input
                    id='descripcion'
                    name='descripcion'
                    value={descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>

                {errores.descripcion && <Error>{errores.descripcion}</Error>}


                {errores.url && <Error>{errores.url}</Error>}
              
            </fieldset>



            <InputSubmit
              type='submit'
              value='Crear producto'
            />
          </Form>
        </>
      </Layout>
    </div>
  )
}

export default NuevoProducto;