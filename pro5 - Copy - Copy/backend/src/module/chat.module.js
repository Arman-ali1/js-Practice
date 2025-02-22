// src/module/chat.module.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/dbconn.js';

const Chat = sequelize.define(
  'Chat',
  {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    targetUserId: {
      type: DataTypes.STRING,
      allowNull: true, // Set to false if you require this field
    },
  },
  {
    tableName: 'chats',
    timestamps: true,
  }
);

export default Chat;
