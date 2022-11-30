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

export default function Login() {
  return (
    <div>
      <Layout>
      <h1>Login</h1>
      </Layout>      
    </div>
  )
}
