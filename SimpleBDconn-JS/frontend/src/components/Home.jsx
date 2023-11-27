import { useEffect,useState } from "react";
import  axios  from "axios";


function Home() {
    
const [name,setName]=useState()
const [data,setData]=useState([])

async function submit(e){
    e.preventDefault()
    try{
        await axios.post("http://localhost:8000/sendData",{
            name
        }).then(res=>{
            console.log(res.data)
            console.log(res.data[0].name);
            setName(res.data)
            
            // console.log(data.data.name);
        }).catch(e=>{
            console.log(e);
        })
    }
    catch{
        console.log(e);
    }
}

    return(
        <>
            <h1>write your name here</h1>
            <form onSubmit={submit}>
            <input onChange={(e)=>{setName(e.target.value)}} type="text" name="name" /><br></br><br></br>
                {/* <input type="submit" /> */}
                <button type="submit" >hit me</button>
            </form>
            <h1>{data}</h1>
        </>
    )
}
export default Home;