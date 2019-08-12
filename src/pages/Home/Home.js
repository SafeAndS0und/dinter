import React, {useContext} from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import RoundBtn from '../../components/partials/RoundBtn/RoundBtn'
import styled from 'styled-components'
import {appContext} from "../../context/app/AppProvider"

const Page = styled.div`
   max-width: 800px;
   display: block;
   margin: auto;
`

const BtnWrapper = styled.section`
  width: 95%;
  display: grid;
  margin: 120px auto 10px auto;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  
  .middle {
    transform: translateY(-20px) scale(1.25);
  }
`

export default () =>{
   const {state, dispatch} = useContext(appContext)

   return (
      <Page className="App">
         <Navbar/>
         <Card/>
         {state.currentDog && state.currentDog.id}
         <BtnWrapper>
            <RoundBtn bgColor="#FF79A8">A</RoundBtn>
            <RoundBtn className="middle">B</RoundBtn>
            <RoundBtn bgColor="#56FF83">C</RoundBtn>
         </BtnWrapper>
      </Page>
   )
}

