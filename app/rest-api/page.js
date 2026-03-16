"use client";

import { useState } from 'react';

export default function Rest() {
  
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const chat = (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
  }
  
  return (
    <main className="Page">
      <div>
        <h1>Dialogflow API</h1>
        <hr /><br />
        <p>The chatbot on this page is implemented using the REST API/Node.js package.</p>
      </div>
      <div className={ isTyping ? "" : "Hide" }>
        <p><i>{ isTyping ? "Typing" : "" }</i></p>
      </div>
      
    </main>
  )
}
