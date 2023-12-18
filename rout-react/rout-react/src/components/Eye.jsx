import React, { useState } from 'react';

function Eye (){
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {/* <input
        type={visible ? 'text' : 'password'}
        placeholder="Enter Password"
      /> */}
      <button onClick={toggleVisibility}>
        {visible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9s9-4.03 9-9s-4.03-9-9-9zm-2 9c0-1.1.9-2 2-2c.34 0 .66.09.94.24l4.82 4.82c.15.28.24.6.24.94c0 1.1-.9 2-2 2c-.34 0-.66-.09-.94-.24l-4.82-4.82c-.15-.28-.24-.6-.24-.94zm3.5-1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-9c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Eye;
