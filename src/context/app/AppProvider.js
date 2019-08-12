import React, {useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'
import {fetchDogInit, fetchDogSuccess} from "./AppActions"
import FetchData from './FetchData'

export const appContext = React.createContext()

export default ({children}) =>{
   const [state, dispatch] = useReducer(AppReducer,
      {
         currentDog: null,
         options: null
      }
   )

   const fetchImages = async() =>{
      dispatch(fetchDogInit())
      const currentDog = await FetchData('images/search?limit=1')
      dispatch(fetchDogSuccess(currentDog[0]))
   }

   useEffect(() =>{
      fetchImages()
   }, [])

   return (
      <appContext.Provider value={{state, dispatch}}>
         {children}
      </appContext.Provider>
   )
}
