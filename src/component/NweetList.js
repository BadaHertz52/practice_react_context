import React, { useCallback } from "react";
import { useContext } from "react/cjs/react.development";
import { NweetContext } from "./NweetContext";
import { ProfileContext } from "./ProfileContext";

const NweetList =()=>{
  const {myProfile} = useContext(ProfileContext);
  const photo =myProfile.photo;
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
      <div className="nweet">
        <img className='profilePhoto' alt="profilePhoto" src={photo}/>
        <div className="nweet_contents">
          <div className="nweet_inform">
            <div>{myProfile.userName}</div>
            <div>{nweet.createdAt}</div>
            <button onClick={()=>onDelete(nweet.createdAt)}>
                delete
            </button>
          </div>
          <div className="nweet_text_attachment">
            <div>{nweet.text}</div>
            {nweet.attachmentUrl !== "" && 
            <img src={nweet.attachmentUrl} 
            className="attachment"
            alt="Nweetattachment" 
            />}
          </div>
        </div>
      </div>
    ))
    }
    </section>
  )
}

export default NweetList ;