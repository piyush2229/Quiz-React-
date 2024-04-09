import React from 'react';
import { Link } from 'react-router-dom';
import one from './one.png'; 
import two from './two.png'; 
import three from './three.png'; 
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="left">
          <div className="quiz-title">
            <h1>How much do you REALLY know?</h1>
            <div className="quiz-description">
              <p>Take the quiz & find out!</p>
              <Link  style={{ textDecoration: 'none' }} to="/quiz" ><h2>Attempt Fast!!</h2></Link>
            </div>
          </div>
        </div>
      <div className="right">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
      </div>
    </div>
  );
}

export default Home;
