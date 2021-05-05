import './App.css';
import firebase from 'firebase/app';
import { chatauth } from './firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
// import {useCollectionData} from "react-firebase-hooks/firestore";

function App() {
  const [user] = useAuthState(chatauth)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>twattle</h1>
      </header>
      <section>
        {user ? <SignOut/> : <SignIn/>}
      </section>
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
      <button class = "App-Signin"onClick = {googleSignIn}>Sign in with Google</button>
    </div>
  )
}

function SignOut(){

  return chatauth.currentUser && (

    <button onClick= {() => chatauth.signOut()}>Sign out</button>
  ) 
}
export default App;
