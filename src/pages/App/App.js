import React from 'react'
import './App.css'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import RoundBtn from '../../components/partials/RoundBtn/RoundBtn'
import styled from 'styled-components'

const Page = styled.div`
   max-width: 800px;
   display: block;
   margin: auto;
`

const BtnWrapper = styled.section`
  width: 90%;
  display: grid;
  margin: 120px auto 10px auto;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  
  .middle {
    transform: translateY(-15px) scale(1.2);
  }
`

export default () =>{

   return (
      <Page className="App">
         <Navbar/>
         <Card/>

         <BtnWrapper>
            <RoundBtn>A</RoundBtn>
            <RoundBtn className="middle">B</RoundBtn>
            <RoundBtn>C</RoundBtn>
         </BtnWrapper>
      </Page>
   )
}

