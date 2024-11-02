import { useState } from "react";
import "./index.scss";
import Header from "../../component/header";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function Quiz() {
  const quizData = [
    {
      question: "What is ReactJS?",
      answers: [
        "A JavaScript library for building user interfaces",
        "A programming language",
        "A database management system",
      ],
      correctAnswer: "A JavaScript library for building user interfaces",
    },
    {
      question: "What is JSX?",
      answers: [
        "A programming language",
        "A file format",
        "A syntax extension for JavaScript",
      ],
      correctAnswer: "A syntax extension for JavaScript",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quizData.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(false);

  const handleAnswerChange = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleAnswerClick = () => {
    if (
      selectedAnswers[currentQuestion] ===
      quizData[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizOver(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setScore(score - 1);
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0",
          gap: "70px",
        }}
      >
        <div className="quiz-container">
          <div className="quiz-content">
            <h2 style={{ color: "red", fontSize: "40px" }}>
              Question {currentQuestion + 1}
            </h2>
            <p>{quizData[currentQuestion].question}</p>
            <FormControl>
              <RadioGroup
                value={selectedAnswers[currentQuestion] || ""}
                onChange={(e) => handleAnswerChange(e.target.value)}
              >
                {quizData[currentQuestion].answers.map((answer, index) => (
                  <FormControlLabel
                    key={index}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                    style={{
                      border: "1px solid",
                      boxSizing: "border-box",
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <div className="button-container">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0}>
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={handleAnswerClick}
                disabled={selectedAnswers[currentQuestion] === null}
              >
                {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div
            className="quiz-complete"
            style={{
              marginTop: "20px",
            }}
          >
            <h2>Quiz Completed!</h2>
            <p>Your score: {score}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
