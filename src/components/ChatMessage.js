import React from 'react';
import {chatauth} from '../firebase/config';
function ChatMessage({message}) {
    const { text, uid, photoURL } = message;  //need to understand

    const messageClass = uid === chatauth.currentUser.uid ? 'sent' : 'received' ; //to apply different styling for sent and recieved

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="NA"/>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
