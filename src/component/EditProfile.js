import React, { useCallback, useState } from 'react';
import {ProfileContext} from './ProfileContext';

const EditProfile =({setPopup})=>{
  const profileContext =React.useContext(ProfileContext);
  const {  state , dispatch}= profileContext;
  const myProfile =state.myProfile;
  const {userName, photo ,header, introduce}=state.inputs ;
  
  const [headerUrl, setHeaderUrl] =useState(myProfile.header );
  const [photoUrl , setPhotoUrl] =useState(myProfile.photo);

  const onSubmit =useCallback((e)=>{
    e.preventDefault();
    console.log(introduce, userName);
    dispatch({
      type:'EDIT_PROFILE',
      myProfile:{
        userName,
        photo:photoUrl,
        header:headerUrl,
        introduce,
      }
    });
    setPopup(false);
  },[userName, photoUrl,headerUrl , introduce]);
  const onFileChange =useCallback((e)=>{
    const {name } = e.target ; 
    const theFile =e.target.files[0];
    const reader = new FileReader();
    if(name === "header"){
      reader.onload=()=>setHeaderUrl(reader.result);
    }else{
      reader.onload=()=>setPhotoUrl(reader.result);
    };
    reader.readAsDataURL(theFile);
    dispatch({
      type:'CAHNGE_PROFILE',
      name,
      value: name ==="header" ? headerUrl : photoUrl
    })
  },[]);
  const onChange =useCallback((e)=>{
    const {name, value}= e.target;
    dispatch({
      type:'CHANGE_PROFILE',
      name,
      value
    });
  },[]);
  return(
    <section id="editProfile">
      <div>
        <p>프로필 수정</p>
        <button onClick={()=>setPopup(false)}>✖</button>
      </div>
      <form onSubmit={onSubmit}>
      <div  className="editImg header" id="editProfile_header">
        <label for="header_input">+edit</label>
        <input id="header_input" name="header" value={header}
          type="file" accept="image/*" 
          onChange={onFileChange}
        />
        <img src={headerUrl} alt="profile_header"/>
      </div>
      <div className="editImg profilePhoto" id="editProfile_photo">
        <label for="photo_input">
        +edit
        </label>
        <input  id="photo_input" 
          type="file" accept='image/*'
          name ="photo"  value={photo}
          onChange={onFileChange}
        />  
        <img src={photoUrl} alt="profilePhoto"/>
      </div>
      <div className="userName">
        <div>닉네임</div>
        <input type="text" name="userName" value={userName} onChange={onChange} placeholder={myProfile.userName} />
      </div>
      <div className="introduce">
        <div>자기 소개</div>
        <input type="text" name="introduce" value={introduce} onChange={onChange} 
        placeholder={myProfile.introduce}/>
      </div>
      <input id="editBtn" type="submit" value="수정"/>
    </form>
    </section>
    
  )
};

export default React.memo(EditProfile);