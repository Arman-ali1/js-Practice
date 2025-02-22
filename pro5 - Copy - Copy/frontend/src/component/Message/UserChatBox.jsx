// ChatBox.jsx
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

// Hard-coded user and target admin details
const userId = 'U1';
const userUsername = 'User';
const targetAdminId = 'A1';

const UserChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef(null);

  useEffect(() => {
    // Establish a single socket connection
    socketRef.current = io('http://localhost:7000');

    // Fetch all messages and filter for the conversation between the user and admin
    fetch('http://localhost:7000/api/chats')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched messages:', data);
        const filtered = data.filter(
          (msg) =>
            (msg.userId === userId && msg.targetUserId === targetAdminId) ||
            (msg.userId === targetAdminId && msg.targetUserId === userId)
        );
        setMessages(filtered);
      })
      .catch((err) => console.error('Error fetching chats:', err));

    // Listen for real-time messages and filter for this conversation
    socketRef.current.on('receive_message', (allMessages) => {
      console.log('Socket received messages:', allMessages);
      const filtered = allMessages.filter(
        (msg) =>
          (msg.userId === userId && msg.targetUserId === targetAdminId) ||
          (msg.userId === targetAdminId && msg.targetUserId === userId)
      );
      setMessages(filtered);
    });

    // Clean up the socket connection on unmount
    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Prepare the message with the user's details and the target admin ID
      const messageData = {
        author: userUsername,
        message: input.trim(),
        userId: userId,
        targetUserId: targetAdminId,
      };
      console.log('User sending message:', messageData);
      socketRef.current.emit('send_message', messageData);
      setInput('');
    }
  };

  const handleDelete = (messageId) => {
    console.log('User deleting message with ID:', messageId);
    socketRef.current.emit('delete_message', messageId);
  };

  return (
    <div className="w-80 h-96 border border-gray-300 rounded flex flex-col">
      {/* Chat Messages Container */}
      <div className="flex-1 p-3 overflow-y-auto bg-gray-100 text-black">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex mb-2 ${
                msg.author === 'Admin' ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`p-2 rounded max-w-[80%] break-words ${
                  msg.author === 'Admin'
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-300 text-black rounded-bl-none'
                }`}
              >
                <p className="text-sm">{msg.message}</p>
                {/* <p className="text-xs text-right">{msg.author}</p> */}
              </div>
              {/* {((msg.userId === userId && msg.targetUserId === targetAdminId) ||
                (msg.userId === targetAdminId && msg.targetUserId === userId)) && (
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              )} */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No messages found for this conversation.
          </p>
        )}
      </div>
      {/* Input Form */}
      <form onSubmit={handleSend} className="flex border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 outline-none text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default UserChatBox;
