import React, { useReducer } from 'react';
import basicImg from '../assets/sasha.jpg'
import basicHeader from '../assets/vincentiu.jpg'; 
const initialState={
  inputs:{
    userName:"",
    photo:"",
    header:"",
    introduce:""
  },
  myProfile:{
    userName:"BORA",
    photo:basicImg,
    header:basicHeader,
    introduce:"Hi I'm BORA",
  }
};

const reducer =(state, action)=>{
  switch (action.type) {
    case 'CHANGE_PROFILE':
      return {
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]:action.value
        }
      }

    case 'EDIT_PROFILE':
      return {
        inputs:initialState.inputs,
        myProfile:action.myProfile
      }
    case 'CLEAR_INPUT':
      return initialState ;
    default: 
      return initialState;
  }
};

export const ProfileContext = React.createContext(null);

const PCProvider =(props)=>{
  const [state, dispatch]= useReducer(reducer, initialState);

  return (
  <ProfileContext.Provider value={{state:state ,dispatch}}>
    {props.children}
  </ProfileContext.Provider>
  )
};

export default PCProvider;