import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
   display: block;
   margin: 15px auto;
   max-width: 93%;
   box-shadow: 0 2px 6px 0 rgb(214,214,214);
   padding: 15px;
   border-radius: 10px;
   max-height: 80vh;
`

const Image = styled.img`
   min-width: 70%;
   max-width: 95%;
   max-height: 40vh;
   object-fit: cover;
   display: block;
   margin: 12px auto 16px auto;
   border-radius: 18px;
 
`

const Name = styled.h3`
  color: #202020;
  font-size: 1.35em;
  font-weight: 700;
  margin: 3px 0;
  text-align: center;
`

const Breed = styled.small`
  display: block;
  text-align: center;
  font-weight: 500;
  color: #666666;
`

const About = styled.p`
  font-weight: 300;
  color: #2f2f2f;
  font-size: .9em;
  margin: 15px 0 2px 0;
`

export default ({dog}) =>{

   return (
      <Wrapper>

         <Name>
            Benjamin, 3
         </Name>

         <Breed>
            {
               dog.breeds.length > 0
                  ? dog.breeds[0].name
                  : "Does my breed matter?"
            }
         </Breed>

         <Image src={dog.url}/>

         <About>
            {
               dog.breeds.length > 0
                  ?
                  (
                     <span>
                        I live about {dog.breeds[0].life_span}.
                        <br/>
                        {dog.breeds[0].bred_for && `I'm mostly bred for ${dog.breeds[0].bred_for.toLowerCase()}.`}
                        <br/>
                        <br/>
                        {dog.breeds[0].temperament && `I am ${dog.breeds[0].temperament.toLowerCase()}.`}
                     </span>
                  )
                  : "I'm just awesome. Love me."
            }
         </About>

      </Wrapper>
   )
}