import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserChatBox from './component/Message/UserChatBox';
import AdminChatBox from './component/AdminMessege/AdminChatBox';

const App = () => {
  return (
    <Router >
      <Routes  >
        <Route path="/userchat" element={<UserChatBox />} />
        <Route path="/adminchat" element={<AdminChatBox />} />
        {/* Redirect any unknown routes to /userchat */}
        <Route path="*" element={<Navigate to="/userchat" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
