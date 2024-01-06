import React from 'react'
import axios from 'axios'

function Cookie() {

    async function getname(){
        try {

            axios.get("http://localhost:3000/name")
            .then((res)=>{
                console.log(res);
            })
            .catch((e)=>{
                console.log(e);
            })
            
        } catch (error) {
            console.log(error);
        }
    }
  return (

    

    <>
      <h1>Arman</h1>
      <button onClick={getname} className='s'>gettname</button>
    </>
  )
}

export default Cookie
