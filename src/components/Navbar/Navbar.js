import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
   display: block;
   box-shadow: 0px 4px 5px 0px rgba(209,209,209,1);
   padding: 8px 0;
`

const Title = styled.h1`
   text-align: center;
   color: #ff695e;
   margin: 0;
`

export default props =>{
   return (
      <Wrapper className="App">
         <Title>Dinter</Title>
      </Wrapper>
   )
}

