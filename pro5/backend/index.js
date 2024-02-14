import express from 'express';
import cors from 'cors';
import http from 'http';
import {Server} from "socket.io"
import dbconn from './src/db/dbconn.js';
import Chat from './src/module/chat.module.js';

const app = express();
dbconn()
const server = http.createServer(app)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const io=new Server(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:["GET","POST"]
  },

})

// app.get('/', (req, res) => {
//     // res.cookie("name","arman")
//   res.json({ message: 'Welcome to bezkoder application.' });
// });

io.on("connection",(socket)=>{
    console.log(`User Connected: ${socket.id}`);
    // console.log(`user connected: ${socket.id}`)
    socket.on("send_message",async(data)=>{
      // console.log(data)
      console.log(data.author);
      const author=data.author;
      const message=data.message;
      
      try {
        const newChate = new Chat({
          author,
          message
        })
        const saveChat = await newChate.save();
        console.log("Chate created");
        const getAllChat=await Chat.find();
        console.log(getAllChat);
        socket.emit("receive_message",getAllChat)
        socket.broadcast.emit("receive_message",getAllChat)
      } catch (error) {
        console.log("error in cath ");
      }
      // socket.broadcast.emit("receive_message",data)
    });
    
});

const PORT = process.env.PORT || 3030;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}
);
