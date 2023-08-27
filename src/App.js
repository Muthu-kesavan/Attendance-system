import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Attendance from './Pages/Attendance';
import AttendanceDisplay from './Pages/AttendanceDisplay';
import Thanks from'./Pages/Thanks';
import Navbar from './Components/Navbar';
import Footer from'./Components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Attendance" element={<Attendance/>} />
          <Route path="/Attendance/:id" element={<AttendanceDisplay/>}></Route>
          <Route path="/Thanks" element={<Thanks />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
