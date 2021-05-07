import {useState, useRef} from 'react';
import firebase from 'firebase/app';
import {chatFirestore} from '../firebase/config';
import {chatauth} from '../firebase/config';
import ChatMessage from './ChatMessage';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatRoom() {
    const messageRef = chatFirestore.collection('chat');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const[formValue, setFormValue] = useState('');

    const ref = useRef() //acess the dom element
    
    const sendMessage = async(e) => {

        e.preventDefault();
        const {uid , photoURL} = chatauth.currentUser;
        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setFormValue('');

        ref.current.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div className = "ChatRoom">
            <main>
                {messages && messages.map(msg => <ChatMessage  message = {msg}/>)}
                <div ref= {ref}></div>
            </main>
            <form onSubmit = {sendMessage}>
                <input value={formValue} onChange={(e)=> setFormValue(e.target.value)}/>
                <button disabled={!formValue} type ="submit">🕊</button>
            
            </form>
        </div>
    )
}
export default ChatRoom;