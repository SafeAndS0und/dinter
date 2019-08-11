import React from 'react'
import './App.css'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import styled from 'styled-components'

const Page = styled.div`
   max-width: 800px;
   display: block;
   margin: auto;
`

export default () =>{

   return (
      <Page className="App">
         <Navbar/>
         <Card/>
      </Page>
   )
}

