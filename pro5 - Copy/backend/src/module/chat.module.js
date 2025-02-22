// src/module/chat.module.js
import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt
);

const Chat = mongoose.model('Chat', ChatSchema);
export default Chat;
