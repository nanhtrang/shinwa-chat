import React, { useState } from 'react';

function ChatApp() {
  const [message, setMessage] = useState('');   // State to hold the current message
  const [chat, setChat] = useState([]);         // State to hold all chat messages

  // Function to handle sending message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChat([...chat, message]);  // Add new message to chat history
      setMessage('');               // Clear input after sending
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Chat Room</h2>
      
      {/* Chat history display */}
      <div style={{ height: '300px', border: '1px solid #ccc', padding: '10px', overflowY: 'scroll' }}>
        {chat.map((msg, index) => (
          <p key={index} style={{ padding: '5px', backgroundColor: '#f1f1f1', borderRadius: '5px', margin: '5px 0' }}>
            {msg}
          </p>
        ))}
      </div>

      {/* Input for new message */}
      <form onSubmit={handleSendMessage} style={{ marginTop: '10px' }}>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          style={{ width: '80%', padding: '10px' }}
          placeholder="Type your message..." 
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Send</button>
      </form>
    </div>
  );
}

export default ChatApp;
