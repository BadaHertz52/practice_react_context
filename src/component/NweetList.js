import React, { useCallback, useState } from "react";
import { useContext } from "react/cjs/react.development";
import { NweetContext } from "./NweetContext";
import { ProfileContext } from "./ProfileContext";

const NweetList =()=>{
  const {myProfile} = useContext(ProfileContext);
  const photo =myProfile.photo;
  const {state, dispatch}=useContext(NweetContext);
  const [popup, setPopup]=useState(false);
  const [target, setTarget]=useState(null);
  const [Top, setTop] = useState("");
  const myNweets =state.myNweets;;

  const onPopup =(createdAt)=>{
    setTarget(createdAt);
    setPopup(true);
    const profile =document.getElementById('profile');
    const clientRect = profile.getBoundingClientRect();
    const profileTop =clientRect.top;
    setTop(profileTop);
    console.log(profileTop);

  };
  const onCancle =()=>{
    setPopup(false);

  };
  const onDelete =useCallback((createdAt)=>{
    dispatch({
      type:"DELETE",
      createdAt
    });
    onCancle();
  },[]);

  return(
  <>
    <section id="nweetList">
    {myNweets && myNweets.map(nweet => (
      <div className="nweet">
        <img className='profilePhoto' alt="profilePhoto" src={photo}/>
        <div className="nweet_contents">
          <div className="nweet_inform">
            <div>{myProfile.userName}</div>
            <div>{nweet.createdAt}</div>
            <button  onClick={()=>onPopup(nweet.createdAt)}>
                X
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
    {popup &&
    <div id="alert" >
      <div>
        <div>
          해당 글을 삭제하시겠습니까?
        </div>
        <div>
          <button onClick={()=>onDelete(target)}>삭제</button>
          <button onClick={onCancle}>취소</button>
        </div>
        </div>  
    </div>
    }
  </>
  )
}

export default NweetList ;