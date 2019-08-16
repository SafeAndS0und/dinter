import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './pages/Home/Home.js'
import Favorites from './pages/Favorites/Favorites.js'
import AppProvider from './context/app/AppProvider'

export default () =>{

   return (
      <AppProvider>
         <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/favorites" component={Favorites}/>
         </Router>
      </AppProvider>
   )
}