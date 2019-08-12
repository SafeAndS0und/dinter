import {ASD} from "./AppActions"

export default (state, action) =>{
   switch(action.type){
      case ASD :
         return {
            number: state.number + 1
         }

      default:
         return state
   }
}