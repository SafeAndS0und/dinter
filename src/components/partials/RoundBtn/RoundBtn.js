import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: #ff6258;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0;
  color: white;
`


export default props =>{
   return (
      <Btn className={props.className}>
         {props.children}
      </Btn>
   )
}

