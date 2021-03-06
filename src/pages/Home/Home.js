import React, {useContext} from 'react'
import MainLayout from '../../layouts/Main/Main'
import Card from '../../components/Card/Card'
import RoundBtn from '../../components/partials/RoundBtn/RoundBtn'
import styled from 'styled-components'
import {appContext} from "../../context/app/AppProvider"
import {TiHeart, TiThumbsDown, TiThumbsUp} from 'react-icons/ti'
import FetchData from "../../context/app/FetchData"
import {fetchDogInit, fetchDogSuccess} from "../../context/app/AppActions"


const BtnWrapper = styled.section`
  max-width: 600px;
  position: fixed;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  
  .middle {
    transform: translateY(-20px) scale(1.25);
    
    &:hover {
      transform: translateY(-20px) scale(1.35);
    }
  }
`

export default () =>{
   const {state, dispatch} = useContext(appContext)

   const addToFavorites = () => {
      const favoriteDogs = JSON.parse(localStorage.getItem('favoriteDogs')) || []
      favoriteDogs.push(dog)
      localStorage.setItem('favoriteDogs', JSON.stringify(favoriteDogs))

      fetchNextDog()
   }

   const fetchNextDog = async() =>{
      dispatch(fetchDogInit())
      const currentDog = await FetchData('images/search?limit=1')
      dispatch(fetchDogSuccess(currentDog[0]))
   }

   const dog = state.currentDog

   return (
      <MainLayout>
         {state.loading || <Card
            name={dog.breeds.length > 0 ? dog.breeds[0].name : null}
            bred_for={dog.breeds.length > 0 && dog.breeds[0].bred_for}
            url={dog.url}
            life_span={(dog.breeds.length > 0 && dog.breeds[0].life_span) && dog.breeds[0].life_span}
            temperament={(dog.breeds.length > 0 && dog.breeds[0].temperament) && dog.breeds[0].temperament}
         />

         }

         <BtnWrapper>
            <RoundBtn bgColor="#FF5962" fetchNextDog={fetchNextDog}>
               <TiThumbsDown/>
            </RoundBtn>
            <RoundBtn className="middle" fetchNextDog={addToFavorites}>
               <TiHeart/>
            </RoundBtn>
            <RoundBtn bgColor="#42FF78" fetchNextDog={fetchNextDog}>
               <TiThumbsUp/>
            </RoundBtn>
         </BtnWrapper>
      </MainLayout>
   )
}

