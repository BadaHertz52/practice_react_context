import React from "react";

const NweetList =({myNweets, onDelete})=>{
  console.log("nweets", myNweets)
  return(
    <>
    {myNweets && myNweets.map(nweet => (
      <div>
        <div>{nweet.text}</div>
        <img src={nweet.attachmentUrl} alt="Nweetattachment" width="100px" height="100px" />
        <button onClick={()=>onDelete(nweet.createdAt)}>삭제</button>
      </div>
    ))
    }
    </>
  )
}

export default NweetList ;