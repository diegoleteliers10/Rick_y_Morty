import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types"

import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async(dispatch) => {
      try{
         const {data}= await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data
         });
      }
      catch(error){
         console.log(error)
      }
   }

};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async(dispatch) => {
      try{
         const response= await axios.delete(endpoint);
         console.log(response.data)
         dispatch({
            type: REMOVE_FAV,
            payload: response.data
         })
      }
      catch(error){
         return {
            type:Error,
            payload:error
         }
      }
   }
};

export const filterCards= (gender) =>{
  return {type: FILTER, payload:gender}
}

export const orderCards=(orden)=>{
  return {type:ORDER, payload:orden}
}