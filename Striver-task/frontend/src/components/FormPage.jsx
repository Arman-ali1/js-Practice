import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const FormPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    language: 'C++',
    stdin: '',
    code: '',
  });

//   const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // history.push('/entries');
  };

  return (
    <div className='min-h-screen min-w-screen border-0  border-white rounded-lg p-2 m-10 shadow-2xl  shadow-slate-300 '>
      {/* <h1 className='text-center'>Submit Code Snippet</h1> */}
      
      <form onSubmit={handleSubmit} className='sm:grid sm:grid-flow-row sm:gap-2 sm:min-w-screen p-4  '>
          <div className='sm:grid sm:grid-flow-col bg-gray-800 p-2'>
            <label>
              Username:
              <input
                className='bg-white  text-black border-2 border-white rounded-md p-2 w-1/2'
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Preferred Language:
              <select
                className='bg-white  text-black border-2 border-white rounded-md p-2 '
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
              </select>
            </label>
          </div>  
          <br />
          <div className='sm:grid sm:grid-flow-col'>
              <label>
              Standard Input:
              <textarea
                name="stdin"
                value={formData.stdin}
                onChange={handleChange}
                rows="4"
              />
              </label>
              <br />
              <label>
              Source Code:
              <textarea
                name="code"
                value={formData.code}
                onChange={handleChange}
                rows="10"
                required
              />
            </label>
            <br />
          </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default FormPage;
