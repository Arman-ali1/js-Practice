import './App.css';
import WebAgencies from './component/Day2/WebAgencies.jsx';
import Form from './component/Form/Form.jsx';

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<WebAgencies/>} />
      <Route path='/form' element={<Form/>} />
      <Route path='/webagencies' element={<WebAgencies/>} />
    </Routes>
    </>
  );
}

export default App;
