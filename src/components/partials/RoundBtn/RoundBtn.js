import React from 'react'
import styled from 'styled-components'

export default props =>{

   const Btn = styled.button`
     background-color: ${props.bgColor ? props.bgColor : '#ff5f8c'};
     width: 60px;
     height: 60px;
     border-radius: 50%;
     border: 0;
     color: white;
     cursor: pointer;
     transition: .3s;
     
     &:hover{ 
       transform: scale(1.1);
     }
     
     svg {
      transform: scale(2.2)
     }
`

   return (
      <Btn className={props.className}>
         {props.children}
      </Btn>
   )
}

