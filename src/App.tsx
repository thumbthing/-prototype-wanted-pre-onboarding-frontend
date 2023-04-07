import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ MainPage } />
        <Route path="/signup" Component={  } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
