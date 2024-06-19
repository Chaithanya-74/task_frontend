import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './component/Register';
import Header from './component/public/Header';
import './App.css';
import TaskList from './TaskList';
// import Dashboard from './Dashboard';

// import Dashboards from './Dashboards';
// import main from './main'

// In src/component/public/Header.jsx
// import './Header.css'; // Adjust the path if necessary

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/tasklist" element={<TaskList />} />
        {/* <Route excat path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
