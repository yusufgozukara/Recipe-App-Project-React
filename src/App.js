
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Login/> */}
      <Navbar/>
      <Routes>
        
        


      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
