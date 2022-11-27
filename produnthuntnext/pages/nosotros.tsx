import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import Layout from '../components/layout/Layout'

const Heading = styled.h1`
  color: red;  
`

export default function Nosotros() {
  return (
    <div>
      <Layout>
      <Heading>Nosotros</Heading>
      </Layout>      
    </div>
  )
}
