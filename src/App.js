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
    <>
      <div id="side">
      <PCProvider>
        <Profile/> 
      </PCProvider>
      </div>
      <div id="main" >
      <NCProvider>
        <CreateNweet/>
        <NweetList/>
      </NCProvider>
      </div>
     
    </>
  );
}

export default App;
