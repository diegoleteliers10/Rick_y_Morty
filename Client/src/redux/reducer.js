import { ADD_FAV , FILTER, ORDER, REMOVE_FAV } from "./actions-types"

const initialState= {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, action)=>{
  switch(action.type){

    case ADD_FAV:
        return { 
          ...state,
           myFavorites: action.payload, allCharacters: action.payload
        };


    case REMOVE_FAV:
      return { 
        ...state,
         myFavorites: action.payload 
      };


    case FILTER:
      const {allCharacters}= state
      const allCharFilt= allCharacters.filter(char=> char.gender===action.payload)
      return {
        ...state,
        myFavorites:allCharFilt
      }


    case ORDER:

      return {
        ...state,
        myFavorites: 
          action.payload=== "A"
          ? state.allCharacters.sort((a,b)=> a.id - b.id)
          : state.allCharacters.sort((a,b)=> b.id - a.id)
      }


    default:
      return {...state}
  }
}

export default reducer