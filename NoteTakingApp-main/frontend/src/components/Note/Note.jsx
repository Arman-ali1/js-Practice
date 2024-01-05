import React from "react";
import deleteimg from "../../assets/delete.svg"
import editimg from "../../assets/edit.svg"
import axios from "axios";
const notecss = {
  "boxSizing": " border-box",
  "minWidth": "300px",
  "minHeight": "300px",
  background: "rgba(217, 217, 217, 0.58)",
  border: "2px solid white",
  "boxShadow": "12px 17px 51px #00000",
  "backdropFilter": " blur(6px)",
  "borderRadius": "17px",
  "textAlign": "center",
  "cursor": "pointer",
  "transition": " all 0.5s",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  " userSelect": "none",
  " fontWeight": "bolder",
  "color": "black",
  "margin": "10px",
};
function Note({title ,content}) {
  const detete = async()=>{
    console.log("delete")
    //send _id which comes from mongodb for every note at the time of save note
    //defalt _id
    // const _id="65983bc62dc45687750032e0" destructure the value of _id then pass _id
    await axios.post("http://localhost:8000/api/v1/notes/deletenote",{_id})
    .then(()=>{
      console.log("data send for deletion successfully");
    })
    .catch((error)=>{
      console.log("Error during calling api of delete note");
    })
    


  }
  const edit = async()=>{
    console.log("edit")

    //send _id which comes from mongodb for every note at the time of save note
    //defalt _id
    const _id="65983c832dc45687750032f1" 
    // destructure the value of _id then pass _id
    const updateField="update"
    const flage=true  
    // use useState on the behalf of setTitle or setContent


    await axios.post("http://localhost:8000/api/v1/notes/editnote",{_id,updateField,flage})
    .then(()=>{
      console.log("data send for update successfully");
    })
    .catch((error)=>{
      console.log("Error during calling api of update note");
    })

  }
  return (
    <>
      <div>
        <div style={notecss}>
          <div >
            <h2 style={{color:"blue", "fontSize":"30px"}} className="title">{title}</h2>
            <p className="content">{content}</p>
          </div>
        </div>
          <div style={{"display" :"flex","justifyContent": "space-between","minWidth": "300px","cursor":"pointer", "padding":"3px 10px"}}>
          <button onClick={detete}><img src={deleteimg} alt="delete" /></button>
          <button onClick={edit}><img src={editimg} alt="update" /></button>
            
          </div>
      </div>
    </>
  );
}

export default Note;
