import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FaDog, FaCog} from "react-icons/fa"

const ClearLink = styled(Link)`
  text-decoration: none;
`

const Wrapper = styled.nav`
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   z-index: 10;
   box-shadow: 0 4px 5px 0 rgb(233,233,233);
   padding: 8px 0;
`

const Title = styled.h1`
   text-align: center;
   color: #ff695e;
   margin: 0;
`

const DogScaled = styled(FaDog)`
  transform: scale(1.3);
  color: #cdcdcd;
  position: fixed;
  top: 14px;
  right: 15px;
`
const CogScaled = styled(FaCog)`
  transform: scale(1.2);
  color: #cdcdcd;
  position: fixed;
  top: 15px;
  left: 15px;
`

export default props =>{
   return (
      <Wrapper>

         <CogScaled/>

         <ClearLink to='/'>
            <Title>Dinter</Title>
         </ClearLink>

         <ClearLink to='/favorites'>
            <DogScaled/>
         </ClearLink>

      </Wrapper>
   )
}

