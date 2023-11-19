import { useState } from "react";
function Count(){
    const [Count, setCount] = useState(0);
    function counter(){
        setCount(Count+1);
    }
    return(
        <div>
            <h1>(: This is a counter :)</h1>
            <button onClick={counter} className="cursor-pointer">{Count} :)</button>
        </div>
    );
}
export default Count; 
