import { memo,useState,useCallback } from "react";

function Child(){
    const [count2,setCount]=useState(0)
    const[act,seAct]=useState(0);
    const add2=useCallback(()=>{
        setCount(count2+1)
    },[count2])
   const act1= useCallback(()=>{
        let i=0;
    while(i<9999){
        i++;
        console.log("whiel");
        seAct(act-1)
    }
    },[act])
    useCallback(()=>{
        console.log("child Render");
    },[add2])
    
    
  
       
    
    return(
        <>
            <h1>Arman Ali</h1>
        <button onClick={add2}>count2:{count2}</button>
        <button onClick={act1}>act:{act}</button>
        </>
    )
}
export default memo(Child);