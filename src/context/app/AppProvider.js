import React, {useReducer} from 'react'
import AppReducer from './AppReducer'

export const appContext = React.createContext()

export default ({children}) => {
   const [state, dispatch] = useReducer(AppReducer, {number: 1})

   return (
      <appContext.Provider value={{state, dispatch}}>
         {children}
      </appContext.Provider>
   )
}
