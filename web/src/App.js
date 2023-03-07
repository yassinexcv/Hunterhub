import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Admin/Dashboard';
import Register from './pages/Auth/Register';
import AddSpotes from './pages/Admin/AddSpotes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addSpotes" element={<AddSpotes />} /> 

        </Routes>
        <ToastContainer />

      </Router>

    </div>
  );
}

export default App;
