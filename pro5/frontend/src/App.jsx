import { useState,useEffect } from 'react'
import io from 'socket.io-client'
import './App.css'
import Message from './component/Message/Message';
const socket=io.connect("http://localhost:3030");
function App() {
  const [message, setMessage] = useState("message send")
  // const [messageReceive,setMessageReceive]=useState("hello receive")
  const[author,setAuthor]=useState("demo-author");
  const[Chatt,setChatt]=useState([])
  
  const submit = async() => {
  
      socket.emit("send_message", {message,author});
      const temp={
        message:message,
        author:author
      }
      console.log(temp);
      // setChatt(temp)
  }
  useEffect(() => {
    console.log("useE start");
    socket.on("receive_message",(data)=>{
      // setMessageReceive(data.message)
      setChatt(data)
      // console.log(data.author);
      console.log(data);
    })
    console.log("end useE");
  }, [socket])

  return (
    <>
      <div>
        <h1>Arman Ali</h1>
        <input placeholder='message...' onChange={(e)=>{
          setMessage(e.target.value)
        }}></input>
         <input placeholder='author...' onChange={(e)=>{
          setAuthor(e.target.value)
        }}></input>
        <br></br>
        <br></br>
        <button onClick={submit}>send message</button>
        <br></br>
        <br></br>
        <h1>message</h1>
        <br></br>
        {Chatt.map((note) => (
          <div key={note._id}>
            <Message {...note} />
            
          </div>
        ))}
      </div> 
      
    </>
  )
}

export default App
