import {FETCH_DOG_INIT, FETCH_DOG_SUCCESS} from "./AppActions"

export default (state, action) =>{
   switch(action.type){

      case FETCH_DOG_INIT :
         return {
            ...state,
            options: action.payload.options,
            loading: true
         }

      case FETCH_DOG_SUCCESS :
         return {
            ...state,
            currentDog: action.payload.currentDog,
            loading: false
         }

      default:
         return state
   }

}