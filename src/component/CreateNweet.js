import React, { useCallback, useState ,useContext } from 'react';
import { NweetContext} from './NweetContext';
import { ProfileContext } from './ProfileContext';

const CreateNweet =()=>{
  const {myProfile} = useContext(ProfileContext);
  const photo =myProfile.photo;
  const {state, dispatch} = useContext(NweetContext);
  const {text, attachment}=state.inputs;
  const [attachmentUrl, setAttachmentUrl]=useState("");
  const now = new Date();
  const year = now.getFullYear();
  const month =now.getMonth()+1;
  const date = now.getDate();
  const hour = now.getHours();
  const minutes = now.getMinutes();

  const onChange=useCallback(e=>{
    const {name ,value}= e.target;
    if(name ==="attachment"){
      const theFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload =()=>setAttachmentUrl(reader.result);
      reader.readAsDataURL(theFile);
    }

    dispatch({
      type:'CHANGE',
      name,
      value : name !=="attachment" ? value : "",
    });
    
  },[]) ;

  const onCreate =useCallback( (e)=>{ 
    e.preventDefault();
      dispatch({
        type:"CREATE",
        nweet:{
          createdAt :`${year}-${month}-${date}-${hour}:${minutes}`,
          text :text.replace(/(\r\n|\n)/g, '<br/>'),
          attachmentUrl
        },
    }) ;
      dispatch({
        type:'CLREAR_INPUT'
      });
      setAttachmentUrl("");
  },[text ,attachmentUrl]);

  return (
    <section id="createNweet">
    <form onSubmit={onCreate}>
      <img className='profilePhoto' alt="profilePhoto" 
        src={photo}/>
      <div>
        <div id="text_attachment">
          <textarea 
            name="text"
            value={text}
            maxLength="144"
            minLength="1"
            onChange={onChange}  placeholder="무슨 일이 일어나고 있나요? "
          />
          {attachmentUrl !== "" && 
          <img src={attachmentUrl} alt="attachment"/>
          }
        </div>
        <div id="nweetFun">
          <label  for="input_attachment">
            📷 
          </label>
          <input 
          type="file"
          accept="image\*"
          name="attachment"
          id="input_attachment" 
          value={attachment}
          onChange={onChange}
          />
          <input type="submit" value="만들기" />
        </div>
      </div>
    </form>
    </section>
  )

};

export default CreateNweet;