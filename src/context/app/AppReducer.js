import {FETCH_DOG_INIT, FETCH_DOG_SUCCESS} from "./AppActions"

export default (state, action) =>{
   switch(action.type){

      case FETCH_DOG_INIT :
         return {
            ...state,
            options: action.payload.options
         }

      case FETCH_DOG_SUCCESS :
         return {
            ...state,
            currentDog: action.payload.currentDog
         }

      default:
         return state
   }

}