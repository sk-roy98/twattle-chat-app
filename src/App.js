import './App.css';
import {useState} from 'react';
import firebase from 'firebase/app';
import { chatauth } from './firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from './components/ChatRoom';
import Darkmode from './components/darkmode';
// import {useCollectionData} from "react-firebase-hooks/firestore";

function App() {
  const [user, loading] = useAuthState(chatauth);
  const [darkmode, setDarkmode] = useState(false)
  
  return (
    <div className="App">
      <header className= {darkmode ? "darkHeader header" : "header"}>
        <h1>twattle</h1>
          <div className = "header-right">  
            <Darkmode setDarkmode={setDarkmode} darkmode = {darkmode}/>
            <SignOut darkmode = {darkmode} />
          </div>
      </header>
      {!loading && <section>
          {user ? <ChatRoom darkmode= {darkmode} /> : <SignIn/>}
      </section>
      }
    </div>
  );
}
function SignIn(){
  const googleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    chatauth.signInWithPopup(provider);
  }
  return(
    <div>
      <button className = "App-Signin"onClick = {googleSignIn}>Sign in with Google</button>
    </div>
  )
}

function SignOut({darkmode}){

  return chatauth.currentUser && (

    <button className = {darkmode ? "darkButton" : "signout-btn"} onClick= {() => chatauth.signOut()}>Sign out</button>
  ) 
}
export default App;
