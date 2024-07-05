import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'messages'), {
        recipient,
        message,
        timestamp: new Date(),
      });
      setMessage('');
      setRecipient('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h2>Message Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type your message here..."
        />
        <input 
          type="text" 
          value={recipient} 
          onChange={(e) => setRecipient(e.target.value)} 
          placeholder="Recipient" 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageForm;
