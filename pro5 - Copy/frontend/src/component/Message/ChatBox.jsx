import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Connect to the backend (adjust URL/port if needed)
const socket = io('http://localhost:3031');

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch chat history via REST on mount
    fetch('http://localhost:3031/api/chats')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error('Error fetching chats:', err));

    // Listen for real-time updates
    socket.on('receive_message', (allMessages) => {
      setMessages(allMessages);
    });

    // Clean up on unmount
    return () => {
      socket.off('receive_message');
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const messageData = {
        author: 'User', // Replace with dynamic user info as needed
        message: input.trim(),
      };
      socket.emit('send_message', messageData);
      setInput('');
    }
  };

  return (
    <div className="w-80 h-96 border border-gray-300 rounded flex flex-col">
      {/* Chat Messages Container */}
      <div className="flex-1 p-3 overflow-y-auto bg-gray-100 text-black">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              msg.author === 'Admin' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-2 rounded max-w-[80%] break-words ${
                msg.author === 'Admin'
                  ? 'bg-gray-300 text-white rounded-bl-none'
                  : 'bg-blue-500 text-black rounded-br-none'
              }`}
            >
              <p className="text-sm">{msg.message}</p>
              <p className="text-xs text-right">{msg.author}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Input Form */}
      <form onSubmit={handleSend} className="flex border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 outline-none  text-black"
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white hover:bg-green-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
