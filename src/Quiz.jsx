import React, { useState } from "react";
import "./quiz.css";
import { data } from "./data.js";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const nextQuestion = () => {
    if (lock) {
      if (index === data.length-1) {
        setResult(true);
        return 0;
      }
      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(data[newIndex]);
      setLock(false); 
      resetOptionColors(); 
    }
  };

  const checkans = (e, ans) => {
    if (!lock) {
      setLock(true); 
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        const options = e.target.parentNode.children;
        for (let option of options) {
          if (option.textContent === question[`option${question.ans}`]) {
            option.classList.add("correct");
            break;
          }
        }
      }
    }
  };

  const resetOptionColors = () => {
    const options = document.querySelectorAll(".option li");
    options.forEach((option) => {
      option.classList.remove("correct", "wrong");
    });
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Page</h1>
      <hr />
      {result ? (
        <div className="result">
          <h2>Quiz Completed</h2>
          <br />
          <br />
          <h1>Your Score: {score} out of {data.length}</h1>
        </div>
      ) : (
        <div>
          <h2>{index + 1}. {question.question}</h2>
          <ul className="option">
            <li onClick={(e) => checkans(e, 1)}>{question.option1}</li>
            <li onClick={(e) => checkans(e, 2)}>{question.option2}</li>
            <li onClick={(e) => checkans(e, 3)}>{question.option3}</li>
            <li onClick={(e) => checkans(e, 4)}>{question.option4}</li>
          </ul>
          <button onClick={nextQuestion} disabled={index === data.length}>
            Next
          </button>
          <div className="index">
            {index + 1} of {data.length} Questions
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
