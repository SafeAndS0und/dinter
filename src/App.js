import React from 'react'
import Home from './pages/Home/Home.js'
import AppProvider from './context/app/AppProvider'

export default () => {

   return (
      <AppProvider>
         <Home />
      </AppProvider>
   )
}