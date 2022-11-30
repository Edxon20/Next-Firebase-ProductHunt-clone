import React, {useState} from 'react'
import Router from 'next/router';
import Layout from '../components/layout/Layout'
import { Error, Campo, Form, InputSubmit } from '../components/ui/Formulario'
import { css } from "@emotion/react"

import firebase from '../firebase'
//validaciones
import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'

const STATE_INITIAL ={
  nombre: '',
  email: '',
  password: ''
}


const CrearCuenta = () => {

  const [error, guardarError] = useState(false);

  const {valores,errores,handleSubmit,handleChange,handleBlur} = useValidacion(STATE_INITIAL,validarCrearCuenta, crearCuenta);

  const {nombre, email, password} = valores;

  async function crearCuenta () {
    try {
      await firebase.registrar(nombre,email,password);
      Router.push('/')
    } catch (error) {      
      guardarError(error.message);
    }
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
          >Crear Cuenta</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
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

            { errores.nombre && <Error>{errores.nombre}</Error>  }

            { error && <Error>{error}</Error>  }

            <Campo>
              <label htmlFor='email' >Email</label>
              <input
                type='text'
                id='email'
                placeholder='Tu email'
                name='email'
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            { errores.email && <Error>{errores.email}</Error>  }
            <Campo>
              <label htmlFor='password' >Email</label>
              <input
                type='password'
                id='password'
                placeholder='Tu password'
                name='password'
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            { errores.password && <Error>{errores.password}</Error>  }

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

export default CrearCuenta;