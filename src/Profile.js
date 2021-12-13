import React, { useContext } from "react";
import  { ProfileContext } from "./component/ProfileContext";

import { useState } from "react/cjs/react.development";
import EditProfile from "./component/EditProfile";
const Profile =()=>{
  const {state} = useContext(ProfileContext);
  const {userName, introduce, header, photo} =state.myProfile;
  const [popup, setPopup] =useState(false);
  console.log(state.myProfile);
  return(
    <>
    <section id="profile">
      {!popup &&
      <>
      <div>Profile</div>
      <div id="profile_header" className="header">
        <img  src={header} alt='profile_header'/>
      </div>
      <div id="profile
      _photo" className="profilePhoto" > 
        <img  src={photo} alt="profile_photo" />
      </div>
      <div className="userName">
        {userName}
      </div>
      <div className="introduce">
        {introduce}
      </div>
      <div>
      <button id="profileEditBtn" onClick={()=>setPopup(true)}>
          edit
        </button>
      </div>
      </> }
    </section>
    {popup &&
      <EditProfile setPopup={setPopup}/>
     }
    </>
  )
};



export default Profile;