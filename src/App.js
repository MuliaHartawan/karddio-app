import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Home, Profile, Workout, Achievement } from './pages'
import { NavBar } from './layout'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </Router>
  );
}

export default App;
