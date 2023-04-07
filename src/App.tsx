import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ MainPage } />
        <Route path='/signin' Component={ LoginPage } />
        <Route path="/signup" Component={ SignupPage } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
