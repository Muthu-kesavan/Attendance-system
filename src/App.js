import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Attendance from './Pages/Attendance';
import Navbar from './Components/Navbar';
import Attendance from'./Pages/Attendance';
import Footer from'./Components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Attendance" element={<Attendance/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
