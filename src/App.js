import Login from './components/buttons/Login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerPage from './pages/Customer-page';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/loggedIn' element={<CustomerPage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
