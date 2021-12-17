import React, { useContext ,useState } from "react";
import  { ProfileContext } from "./component/ProfileContext";
import EditProfile from "./component/EditProfile";
const Profile =()=>{
  const {myProfile} = useContext(ProfileContext);
  const {userName, introduce, header, photo} =myProfile;
  const [popup, setPopup] =useState(false);
  return(
    <>
    <section id="profile">
      {!popup &&
      <>
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
          수정
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