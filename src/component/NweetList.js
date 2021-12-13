import React, { useCallback } from "react";
import { useContext } from "react/cjs/react.development";
import { NweetContext } from "./NweetContext";

const NweetList =()=>{

  const {state, dispatch}=useContext(NweetContext);
  const myNweets =state.myNweets;
  const onDelete =useCallback((createdAt)=>{
    dispatch({
      type:"DELETE",
      createdAt
    });
  },[]);
  return(
    <section id="nweetList">
    {myNweets && myNweets.map(nweet => (
      <div className="nweets">
        <div>
        <div>{nweet.createdAt}</div>
        <button onClick={()=>onDelete(nweet.createdAt)}>
          삭제
        </button>
        </div>
        <div>{nweet.text}</div>
        {nweet.attachmentUrl !== "" && <img src={nweet.attachmentUrl} alt="Nweetattachment" width="100px" height="100px" />}
 
      </div>
    ))
    }
    </section>
  )
}

export default NweetList ;