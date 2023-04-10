import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Admin/Dashboard';
import Register from './pages/Auth/Register';
import AddSpotes from './pages/Admin/AddSpotes';
import Update from './pages/Admin/Update';
import E404 from './pages/Admin/404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={<Register />} />
          {token && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addSpotes" element={<AddSpotes />} />
              <Route path="/update/:id" element={<Update />} />


            </>
          )}
          <Route path="*" element={<E404 />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
