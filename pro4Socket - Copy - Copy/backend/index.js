import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server as SocketIOServer } from 'socket.io';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
const server = http.SocketIOServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true
    }
  });


io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle 'message' event
  socket.on('message', (data) => {
    console.log('Received message:', data);
    // Broadcast the received message to all connected clients
    io.emit('message', data);
  });
});

// Middleware


// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page server start.....");
});

server.listen(3001, () => {
  console.log('listening on port 3001');
});
