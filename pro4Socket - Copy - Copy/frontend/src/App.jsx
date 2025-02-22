import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Specific from './Specific.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/specific">Go to Specific Component</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/specific" element={<Specific />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
