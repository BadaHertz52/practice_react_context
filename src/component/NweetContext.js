import React, { createContext, useReducer } from "react";
import tangerines from '../assets/tangerines.jpg'

const initialState ={
  inputs:{
    text:"",
    attachment:""
  },
  myNweets:[{
    createdAt:`2021-12-13-21:36`,
    text:"겨울에는 귤! <br/> 😁🍊",
    attachmentUrl:tangerines}]
  /* 형식
  {
  createdAt:"",
  text:"",
  attachmentUrl:""}*/
};
function reducer(state, action){
  switch (action.type) {
    case 'CLREAR_INPUT':
      return {
        ...state,
        inputs:initialState.inputs,
    
      }
    case 'CHANGE':
      return {
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]:  action.value
          //action.name = text or attachment
        }
      }
    case 'CREATE':
      return {
        ...state,
        myNweets: state.myNweets.concat(action.nweet)
      };

    case 'DELETE':
      return{
        ...state,
        myNweets: state.myNweets.filter(nweet => nweet.createdAt !== action.createdAt)
      };
    default:
      return state
  };
} ;
export const NweetContext =createContext(null);
const NCProvider =(props)=>{

  const [state, dispatch]= useReducer(reducer, initialState);

  return <NweetContext.Provider value={{state:state, dispatch}} >
          {props.children}
          </NweetContext.Provider>
};

export default NCProvider ;