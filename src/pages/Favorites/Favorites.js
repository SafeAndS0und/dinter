import React, {useEffect, useState} from 'react'
import MainLayout from '../../layouts/Main/Main'

export default () =>{
   const [dogs, setDogs] = useState([])
   useEffect(() =>{
      const dogList = JSON.parse(localStorage.getItem('favoriteDogs'))
      setDogs(dogList)
   }, [])
   return (
      <MainLayout>
         <h2>Your favorites dogs</h2>

         {
            dogs.map(dog => <p>{dog.id}</p>)
         }
      </MainLayout>
   )
}