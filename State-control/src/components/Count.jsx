import { useState } from "react";
function Count(){
    const [Counter, setCount] = useState(0);
    function addValue(){
        if(Counter<=20)
        setCount(Counter+1);
        else{
            
            alert(" OOH oo! You can't add more than 20");

        }
    }
    return(
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-fuchsia-400 font-serif text-8xl text-center " >(: This is a counter {Counter} :)</h1>
            <button onClick={addValue} className="cursor-pointer text-red-600 text-3xl font-bold ">click for Add  {Counter} :)</button>
        </div>
    );
}
export default Count; 
