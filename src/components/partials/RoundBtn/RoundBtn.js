import React from 'react'
import styled from 'styled-components'

export default props =>{

   const Btn = styled.button`
     background-color: ${props.bgColor ? props.bgColor : '#FF6966'};
     width: 60px;
     height: 60px;
     border-radius: 50%;
     border: 0;
     color: white;
     cursor: pointer;
     
     &:hover{ 
       background-color: grey;
     }
`

   return (
      <Btn className={props.className}>
         {props.children}
      </Btn>
   )
}

