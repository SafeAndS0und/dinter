export const FETCH_DOG_INIT = "FETCH_DOG_INIT"
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS"

export const fetchDogInit = (options) => ({
   type: FETCH_DOG_INIT,
   payload: {options}
})

export const fetchDogSuccess = (currentDog) => ({
   type: FETCH_DOG_SUCCESS,
   payload: {currentDog}
})