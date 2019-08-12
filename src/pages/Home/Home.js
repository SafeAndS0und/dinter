import React, {useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import RoundBtn from '../../components/partials/RoundBtn/RoundBtn'
import styled from 'styled-components'
import {appContext} from "../../context/app/AppProvider"
import {TiHeart, TiThumbsDown, TiThumbsUp} from 'react-icons/ti'

const Page = styled.div`
   max-width: 600px;
   display: block;
   margin: 70px auto 0 auto;
   
`

const BtnWrapper = styled.section`
  max-width: 600px;
  position: fixed;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  
  .middle {
    transform: translateY(-20px) scale(1.25);
    
    &:hover {
      transform: translateY(-20px) scale(1.35);
    }
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
            <RoundBtn bgColor="#FF5962">
               <TiThumbsDown/>
            </RoundBtn>
            <RoundBtn className="middle">
               <TiHeart/>
            </RoundBtn>
            <RoundBtn bgColor="#42FF78">
               <TiThumbsUp/>
            </RoundBtn>
         </BtnWrapper>
      </Page>
   )
}

