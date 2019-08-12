import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.nav`
   display: block;
   margin: 15px auto;
   max-width: 93%;
   box-shadow: 0 4px 5px 0 rgba(209,209,209,1);
   padding: 15px;
   border-radius: 10px;
   max-height: 80vh;
`

const Image = styled.img`
   min-width: 50%;
   max-width: 90%;
   max-height: 50vh;
   object-fit: cover;
   display: block;
   margin: 0 auto 12px auto;
   border-radius: 18px;
 
`

const Name = styled.h3`
  color: #202020;
  font-size: 1.2em;
  font-weight: 700;
  margin: 3px 0;
`

const Breed = styled.small`
  font-weight: 100;
  color: #666666;
`

const About = styled.p`
  font-weight: 100;
  color: #494949;
  font-size: .9em;
  text-align: center;
  margin: 15px 0 2px 0;
`

export default ({dog}) =>{

   return (
      <Wrapper>
         <Image src={dog.url}/>
         <Name>
            Benjamin, 3
         </Name>

         <Breed>
            {
               dog.breeds.length > 0
               ? dog.breeds[0].name
               : "I don't wanna talk about my breed..."
            }
         </Breed>

         <About>
            {
               dog.breeds.length > 0
                  ? dog.breeds[0].temperament
                  : "I'm just awesome. Love me."
            }
         </About>
      </Wrapper>
   )
}