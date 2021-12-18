import './App.css';
import './assets/Profile.css';
import './assets/Main.css';
import PCProvider from './component/ProfileContext';
import Profile from './Profile';
import NCProvider from "./component/NweetContext";
import CreateNweet from './component/CreateNweet';
import NweetList from './component/NweetList';
function App() {
  const borderStyle = "3px solid black"  ;
  
  const onShowEdit =()=>{
    const editBtn = document.getElementById("profileEditBtn");
    console.log(editBtn.style.border);
    editBtn.style.border === "" 
    ? 
    editBtn.style.border= borderStyle
    : 
    editBtn.style.border ="";
  };
  const onShowCN =()=>{
    const CN = document.getElementById("createNweet");
    CN.style.border === "" ? 
    CN.style.border =borderStyle
    :
    CN.style.border = ""
  };
  const onShowDelete =()=>{
    const deleteBtn =document.getElementById("deleteBtn");
    deleteBtn.style.border ===""?
    deleteBtn.style.border = borderStyle
    :
    deleteBtn.style.border ="initial";
  };
  return(
    <>
    <PCProvider>
      <div id="side">
        <Profile/> 
      </div>
      <div id="main" >
        <div>홈</div>
        <NCProvider>
          <CreateNweet/>
          <NweetList/>
        </NCProvider>
      </div>
    </PCProvider>
      <div id="explain">
        <div>
          <div>😀사용법</div>
          <ul>
            <li>
              <button onMouseOver={onShowEdit} onMouseOut={onShowEdit}>
                ▫ "수정" 버튼으로 프로필을 수정해보세요.
              </button>
            </li>
            <li>
              <button onMouseOver={onShowCN} onMouseOut={onShowCN}> 
              ▫ 글과 사진으로 나만의 게시물을 작성해보세요.
              </button>
            </li>
            <li>
              <button onMouseOver={onShowDelete} onMouseOut={onShowDelete}>
              ▫  "삭제" 버튼으로 해당 게시글을 지울 수 있습니다. 
              </button>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default App;
