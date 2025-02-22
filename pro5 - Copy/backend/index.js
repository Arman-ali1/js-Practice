import express from 'express';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose'; // Added for ObjectId validation
import { Server } from 'socket.io';
import dbconn from './src/db/dbconn.js';
import Chat from './src/module/chat.module.js';

const app = express();
dbconn();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// REST endpoint to fetch all chat messages
app.get('/api/chats', async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: 1 });
    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).json({ error: 'Failed to fetch chats' });
  }
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // adjust as needed
    methods: ['GET', 'POST'],
  },
});

io.on('connection', async (socket) => {
  console.log(`User Connected: ${socket.id}`);

  try {
    const chatHistory = await Chat.find().sort({ createdAt: 1 });
    console.log('Sending chat history:', chatHistory);
    socket.emit('receive_message', chatHistory);
  } catch (error) {
    console.error('Failed to fetch chat history:', error);
  }

  socket.on('send_message', async (data) => {
    const { author, message } = data;
    try {
      const newChat = new Chat({ author, message });
      await newChat.save();
      console.log('Chat created');

      const updatedChats = await Chat.find().sort({ createdAt: 1 });
      socket.emit('receive_message', updatedChats);
      socket.broadcast.emit('receive_message', updatedChats);
    } catch (error) {
      console.error('Error saving chat:', error);
    }
  });

  // DELETE functionality with extra debugging and validation
  socket.on('delete_message', async (messageId) => {
    console.log('Received delete_message event for ID:', messageId);
    
    // Validate that messageId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(messageId)) {
      console.error('Invalid ObjectId received:', messageId);
      return;
    }
    
    try {
      const deletedChat = await Chat.findByIdAndDelete(messageId);
      if (!deletedChat) {
        console.log('No chat found with ID:', messageId);
      } else {
        console.log(`Chat with id ${messageId} deleted successfully.`);
      }
      const updatedChats = await Chat.find().sort({ createdAt: 1 });
      io.emit('receive_message', updatedChats);
    } catch (error) {
      console.error('Error deleting chat:', error);
    }
  });
});

const PORT = process.env.PORT || 3031;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
