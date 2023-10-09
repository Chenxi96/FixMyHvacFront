import Login from './components/buttons/Login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerPage from './pages/Customer-page';
import ImagesPage from './pages/Images-page';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/loggedIn' element={<CustomerPage/>} />
          <Route path='/allQuotes' element={<ImagesPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
