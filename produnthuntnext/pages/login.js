import React, {useState} from 'react'
import Router from 'next/router';
import Layout from '../components/layout/Layout'
import { Error, Campo, Form, InputSubmit } from '../components/ui/Formulario'
import { css } from "@emotion/react"

import firebase from '../firebase'
//validaciones
import useValidacion from '../hooks/useValidacion'
import validarIniciarSesion from '../validacion/validarIniciarSesion'

const STATE_INITIAL ={
  email: '',
  password: ''
}


const login = () => {

  const [error, guardarError] = useState(false);

  const {valores,errores,handleSubmit,handleChange,handleBlur} = useValidacion(STATE_INITIAL,validarIniciarSesion, iniciarSesion);

  const {email, password} = valores;

  async function iniciarSesion () {

    try {
      await firebase.login(email,password);
      Router.push('/');
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
          >Iniciar Sesion</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
       
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
            {error && <Error>{error}</Error>}
            <InputSubmit
              type='submit'
              value='Iniciar Sesion'
            />
          </Form>
        </>
      </Layout>
    </div>
  )
}

export default login;