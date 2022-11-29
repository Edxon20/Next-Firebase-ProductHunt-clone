import React from 'react'
import Layout from '../components/layout/Layout'
import { Error, Campo, Form, InputSubmit } from '../components/ui/Formulario'
import { css } from "@emotion/react"

export default function CrearCuenta() {
  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
                text-align: center;
                margin-top: 5rem;
            `}
          >Crear Cuenta</h1>
          <Form>
            <Campo>
              <label htmlFor='nombre' >Nombre</label>
              <input
                type='text'
                id='nombre'
                placeholder='Tu nombre'
                name='nombre'
              />
            </Campo>
            <Campo>
              <label htmlFor='email' >Email</label>
              <input
                type='text'
                id='email'
                placeholder='Tu email'
                name='email'
              />
            </Campo>
            <Campo>
              <label htmlFor='password' >Password</label>
              <input
                type='password'
                id='password'
                placeholder='Tu password'
                name='password'
              />
            </Campo>

            <InputSubmit
              type='submit'
              value='Crear Cuenta'
            />
          </Form>
        </>
      </Layout>
    </div>
  )
}
