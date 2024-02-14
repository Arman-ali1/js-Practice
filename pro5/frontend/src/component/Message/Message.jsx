import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

// import axios from "axios";

function Message({_id,author,message}) {
 
  // const navigate=useNavigate();
  const noteId = _id;
  const [id,setId] = useState(noteId);
  const [noteAuthor,setNoteAuthor] = useState(author);
  const [contentText,setContentText] = useState(message);
  
  return (
    <>
      <div>
        <div >
          <div >
            <h3 style={{color:"blue", "fontSize":"30px"}} className="title">{noteAuthor}</h3>
            
          </div>
          <div >
            <h3 style={{color:"blue", "fontSize":"30px"}} className="title">{contentText}</h3>
            
          </div>
        </div>
          
      </div>
    </>
  );
}

export default Message;
