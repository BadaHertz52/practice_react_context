import './App.css';
import './assets/Profile.css';
import './assets/Main.css';
import PCProvider from './component/ProfileContext';
import Profile from './Profile';
import NCProvider from "./component/NweetContext";
import CreateNweet from './component/CreateNweet';
import NweetList from './component/NweetList';
function App() {
  return(
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
  );
}

export default App;