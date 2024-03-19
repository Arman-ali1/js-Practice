import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormPage from './components/FormPage';
import EntriesPage from './components/EntriesPage';

function App() {
  const [entries, setEntries] = useState([]);

  const handleSubmit = (formData) => {
    setEntries((prevEntries) => [...prevEntries, { ...formData, timestamp: new Date().toLocaleString() }]);
  };

  return (
    
      <div className="App">
        <h1 className='text-center'>Arman</h1>
        <FormPage />
        {/* <EntriesPage/> */}
      </div>
    
  );
}

export default App;
