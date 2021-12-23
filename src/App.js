import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ProgressIdb from './data/progress-idb';

import { Home, Profile, Progress, Achievement, Login, UpdateDataForm,
        Alert, SignUp,IdentifyPopUp,IdentifyForm, DataSaved } from './pages'
import { NavBar } from './layout'

function App() {
  const [component, setComponent] = React.useState('');

  React.useEffect(() => {
      const getData = async () => {
      const response = await ProgressIdb.getToken();

      if (response.length===0) {
          setComponent(<Login />);
      }
      else{
          setComponent(<Home />);
      };
  }
      getData();
  });
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={component} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/identifypopup" element={<IdentifyPopUp />} />
        <Route path="/identifyform" element={<IdentifyForm />} />
        <Route path="/updatedataform" element={<UpdateDataForm />} />
        <Route path="/datasaved" element={<DataSaved />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </Router>
  );
}

export default App;
