import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Home, Profile, Progress, Achievement, Login,
         SignUp,IdentifyPopUp,IdentifyForm, DataSaved } from './pages'
import { NavBar } from './layout'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/identifypopup" element={<IdentifyPopUp />} />
        <Route path="/identifyform" element={<IdentifyForm />} />
        <Route path="/datasaved" element={<DataSaved />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </Router>
  );
}

export default App;
