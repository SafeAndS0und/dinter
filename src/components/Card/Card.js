import React, {useContext} from 'react'
import styled from 'styled-components'
import {appContext} from "../../context/app/AppProvider"
import {doASD} from "../../context/app/AppActions"


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
  margin: 0;
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

export default props =>{
   const {state, dispatch} = useContext(appContext)

   return (
      <Wrapper>
         <Image
            src="https://vignette.wikia.nocookie.net/youtube/images/1/18/DoggyDoggy.jpg/revision/latest?cb=20180714012154"/>
         <Name>
            Benjamin, 3
         </Name>

         <Breed onClick={() => {
            console.log('asd')
            dispatch(doASD(2))
         }}>
            Bedlington Terrier, {state.number}
         </Breed>

         <About>
            I lov loooong walks, green grass and nice hoomans!
         </About>
      </Wrapper>
   )
}