import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
