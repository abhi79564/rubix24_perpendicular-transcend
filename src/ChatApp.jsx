// ChatApp.jsx

import React, { useState, useEffect, useRef } from 'react';
import './ChatApp.css'; // Import your CSS file
import io from 'socket.io-client';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const socketRef = useRef();

  useEffect(() => {
    // Your socket.io initialization code
    socketRef.current = io('http://localhost:3010');

    // Your socket.io event listeners
    socketRef.current.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up socket connection when the component unmounts
      socketRef.current.disconnect();
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      // Emit a message event to the server
      socketRef.current.emit('message', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div id="message-container" className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
            {message}
          </div>
        ))}
      </div>
      <form id="send-container" className="send-container" onSubmit={handleSendMessage}>
        <input
          type="text"
          id="message-input"
          className="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" id="send-button" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatApp;
