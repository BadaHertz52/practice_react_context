import React from 'react';

const CreateNweet =({text,attachment,attachmentUrl, onChange,onCreate})=>{

  return (
    <form onSubmit={onCreate} >
      <input type="text" 
      name="text"
      value={text}
      onChange={onChange}  placeholder="무슨 일이 일어나고 있나요? "/>
      <input 
      type="file"
      accept="image\*"
      name="attachment" 
      value={attachment}
      onChange={onChange}
      />
      <img src={attachmentUrl} alt="attachment" width="100px" height="100px"/>
      <input type="submit"  />
    </form>
  )
};

export default CreateNweet;