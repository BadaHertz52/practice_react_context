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
    deleteBtn.style.border ="";
  };
  return(
    <>
    <PCProvider>
      <div id="side">
        <Profile/> 
      </div>
      <div id="main" >
        <div>ν</div>
        <NCProvider>
          <CreateNweet/>
          <NweetList/>
        </NCProvider>
      </div>
    </PCProvider>
      <div id="explain">
        <div>
          <div>πμ¬μ©λ²</div>
          <ul>
            <li>
              <button onMouseOver={onShowEdit} onMouseOut={onShowEdit}>
                β« "μμ " λ²νΌμΌλ‘ νλ‘νμ μμ ν΄λ³΄μΈμ.
              </button>
            </li>
            <li>
              <button onMouseOver={onShowCN} onMouseOut={onShowCN}> 
              β« κΈκ³Ό μ¬μ§μΌλ‘ λλ§μ κ²μλ¬Όμ μμ±ν΄λ³΄μΈμ.
              </button>
            </li>
            <li>
              <button onMouseOver={onShowDelete} onMouseOut={onShowDelete}>
              β«  "μ­μ " λ²νΌμΌλ‘ ν΄λΉ κ²μκΈμ μ§μΈ μ μμ΅λλ€. 
              </button>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default App;
