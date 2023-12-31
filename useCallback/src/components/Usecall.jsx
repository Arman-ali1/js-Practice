import {useState, useCallback } from "react";
import Child from "./Child";
function Usecall(){
    const [count, setCount] = useState(0);

  // Without useCallback
  const add2 = () => {
    console.log('Button clicked!');
    setCount(count+1)
  };

  // With useCallback
  const add = useCallback(() => {
    console.log('Button clicked! Count:', count);
    setCount(count+1)
  }, [count]);

  return (
    <div>
      
      <p>Count: {count}</p>
      <button onClick={add}>Increment</button>
      <button onClick={add2}>Increment2</button>
      {/* <Child/> */}
    </div>
  );
};
export default Usecall;