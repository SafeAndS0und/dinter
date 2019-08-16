import React from 'react'
import styled from 'styled-components'

const Item = styled.article`
  margin-left: 12px;
  width: 80%;
  padding: 16px 8px;
  box-shadow: 0 2px 6px 0 rgb(230,230,230);
  border-radius: 16px;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`
const LeftContainer = styled.section`
   height: 100%;
   border-right: 1px solid #e2e2e2;
   padding-right: 10px;
`
const RightContainer = styled.section`
   height: auto;
   padding-left: 10px;
`
const Name = styled.h3`
  font-weight: 200;
  font-size: 1.2em;
  margin: 2px 0;
  padding-right: 5px;
  text-align: right;
`
const BreedName = styled.h4`
  padding-right: 5px;
  font-weight: 200;
  font-size: .8em;
  margin: 4px 0;
  text-align: right;
`
const About = styled.p`
  margin: 0;
  font-size: .85em;
  color: #9b9b9b;
  width: 100%;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  position: absolute;
  right: -17.5%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
`
export default ({name, age, breedName, temperament, url}) =>{

   return (
      <Item>
         <LeftContainer>
            <Name>{name}, {age}</Name>
            <BreedName>{breedName}</BreedName>
         </LeftContainer>

         <RightContainer>
            <About>{temperament}</About>
         </RightContainer>

         <Image src={url} alt="dog image"/>
      </Item>
   )
}