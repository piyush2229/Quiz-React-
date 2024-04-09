import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer'; // Ensure this component exists or remove this import if not needed
import Home from './Home';
import Nav from './Nav';
import Quiz from './Quiz';
import About from './About'; // Ensure you have an About component
import Info from './Info';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path='/info' element={<Info/>}/>
          {/* Add additional routes as needed */}
        </Routes>
        <Footer /> {/* Ensure this component exists or remove this tag if not needed */}
      </div>
    </BrowserRouter>
  );
}

export default App;
