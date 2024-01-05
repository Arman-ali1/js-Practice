import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import axios from "axios";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const notearr = [
    { title: "Shivam", content: "note taking app" },
    { title: "Arman", content: "Book taking app" },
  ];
  // notearr.push({title:"harsh",content:"thiss is harsh"})
  // Fetching data from the server using axios API
  const getNotes = async() => {
  await  axios
      .get("http://localhost:8000/api/v1/notes/allnotes")
      .then((response) => {
        console.log(response.data);
        // setNotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  
  useEffect(()=>{
    setNotes(notearr);
    getNotes()
  },[])

  //css
  const containercss = {
    margin:"5px",
    "color": "#0077ff",
    "border": "2px solid #0077ff",
    "borderRadius": "6px",
    boxSizing: " border-box",
    minWidth: "300px",
    minHeight: "700px",
    background: "#fffff",
    "display":"flex",
  };
  return (
    <div>
      <div style={containercss}>
        {notes.map((note) => (
          <div key={note}>

          <Note  {...note} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteContainer;
