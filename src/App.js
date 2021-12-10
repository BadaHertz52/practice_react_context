
import './App.css';
import CreateNweet from './CreateNweet';
import { useCallback, useReducer, useState } from 'react';
import NweetList from './NweetList';

const initialState ={
  inputs:{
    text:"",
    attachment:""
  },
  myNweets:[]
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

function App() {

  const [state, dispatch]= useReducer(reducer, initialState);

  const {myNweets}= state ;
  const { text ,attachment} =state.inputs;

  const [attachmentUrl, setAttachmentUrl] =useState("");

  const onChange=useCallback(e=>{
    const {name , value}= e.target;
    if(name ==="attachment"){
      const theFile = e.target.files[0];
      console.log(theFile);
      const reader = new FileReader();
      reader.onload =()=>setAttachmentUrl(reader.result);
      reader.readAsDataURL(theFile);
    };
    dispatch({
      type:'CHANGE',
      name,
      value,
    });

  },[]) ;

  const onCreate =useCallback( (e)=>{
    e.preventDefault();
      dispatch({
        type:"CREATE",
        nweet:{
          createdAt :JSON.stringify(Date.now()),
          text,
          attachmentUrl
        }
      }) ;
      dispatch({
        type:'CLREAR_INPUT'
      });

  },[text ,attachmentUrl]);

  const onDelete =useCallback((createdAt)=>{
    dispatch({
      type:"DELETE",
      createdAt
    });
  },[]);

  return(
    <> 
      <CreateNweet text={text} attachment={attachment} attachmentUrl={attachmentUrl} onChange={onChange}   onCreate={onCreate} />
      <NweetList  myNweets={myNweets} onDelete={onDelete}/>
    </>
  );
}

export default App;
