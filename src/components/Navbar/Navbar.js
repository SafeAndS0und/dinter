import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
   display: block;
   box-shadow: 0 4px 5px 0 rgb(225,225,225);
   padding: 8px 0;
`

const Title = styled.h1`
   text-align: center;
   color: #ff695e;
   margin: 0;
`

export default props =>{
   return (
      <Wrapper>
         <Title>Dinter</Title>
      </Wrapper>
   )
}

