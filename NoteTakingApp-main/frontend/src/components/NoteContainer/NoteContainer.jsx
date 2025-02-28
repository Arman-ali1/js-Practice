import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import axios from "axios";


function NoteContainer() {
  const [notes, setNotes] = useState([]);
  
  // const save = ()=>{

  // }

  useEffect( ()=>{
       axios
        .get("api/v1/notes/allnotes")
        .then((res) => {
          setNotes(res.data)
        }).catch((error)=>{
          console.log("Error in reciving notes", error);
        })
  },[]);


  //css
  const containercss = {
    "display" : "flex",
    "flexDirection":"row",
    "flexFlow": "row wrap",
    "padding":"20px",
    "margin":"5px",
    "color": "#0077ff",
    "border": "2px solid #0077ff",
    "borderRadius": "6px",
    boxSizing: "border-box",
    minWidth: "300px",
    minHeight: "700px",
    background: "#fffff",
    
  };
  return (
    <div>
      <div style={containercss}>
        {notes.map((note) => (
          <div key={note._id}>
            <Note  {...note} />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteContainer;
