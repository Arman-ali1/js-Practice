import React, { useState } from 'react';

function EyeOff(){
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <input
        type={visible ? 'text' : 'password'}
        placeholder="Enter Password"
      />
      <button onClick={toggleVisibility}>
        {visible ? 'Hide' : 'Show'} Password
      </button>
    </div>
  );
};

export default EyeOff;
