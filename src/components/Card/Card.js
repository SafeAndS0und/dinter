import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.nav`
   display: block;
   margin: auto;
   width: 90%;
   box-shadow: 0px 4px 5px 0px rgba(209,209,209,1);
   padding: 8px;
   border-radius: 10px;
`

const Image = styled.img`
   min-width: 50%;
   max-width: 80%;
   max-height: 500px;
   object-fit: cover;
   display: block;
   margin: auto;
   border-radius: 15px;
`

export default props => {

   return (
      <Wrapper>
         <Image src="https://vignette.wikia.nocookie.net/youtube/images/1/18/DoggyDoggy.jpg/revision/latest?cb=20180714012154"/>
      </Wrapper>
   )
}