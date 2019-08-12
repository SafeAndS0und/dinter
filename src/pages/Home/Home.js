import React, {useContext} from 'react'
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
  position: fixed;
  bottom: 25px;
  left: 2.5%;
  width: 95%;
  display: grid;
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
         {
            state.loading || <Card dog={state.currentDog}/>
         }
         <BtnWrapper>
            <RoundBtn bgColor="#FF79A8">A</RoundBtn>
            <RoundBtn className="middle">B</RoundBtn>
            <RoundBtn bgColor="#56FF83">C</RoundBtn>
         </BtnWrapper>
      </Page>
   )
}

