import React, {useEffect, useState} from 'react'
import MainLayout from '../../layouts/Main/Main'
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem'

export default () =>{
   const [dogs, setDogs] = useState([])
   useEffect(() =>{
      const dogList = JSON.parse(localStorage.getItem('favoriteDogs'))
      setDogs(dogList)
   }, [])
   return (
      <MainLayout>
         <h2 style={{textAlign: 'center'}}>Your favorites dogs</h2>

         {
            dogs
               ? dogs.map(dog => <FavoriteItem
                  key={dog.id}
                  name="Benjamin"
                  age="3"
                  breedName={dog.breeds.length > 0 ? dog.breeds[0].name : null}
                  temperament={(dog.breeds.length > 0 && dog.breeds[0].temperament) && dog.breeds[0].temperament}
                  url={dog.url}
               />)
               : <p style={{textAlign: 'center'}}>You're not loving any dog yet :[</p>
         }
      </MainLayout>
   )
}