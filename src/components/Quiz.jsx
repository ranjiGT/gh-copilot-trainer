import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Results from "./Results";
import questions from "../data/questions";

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function Quiz() {
  const [quizQuestions, setQuizQuestions] = useState(() => shuffle(questions));
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const initQuiz = () => {
    setQuizQuestions(shuffle(questions));
    setCurrent(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswers([]);
    setFinished(false);
    setScore(0);
  };

  const handleSelect = (index) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === quizQuestions[current].answer) {
      setScore((s) => s + 1);
    }
    setAnswers((prev) => [...prev, index]);
  };

  const handleNext = () => {
    if (current + 1 >= quizQuestions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const progress = quizQuestions.length
    ? ((current / quizQuestions.length) * 100).toFixed(0)
    : 0;

  if (!quizQuestions.length) return <p className="loading">Loading…</p>;

  if (finished) {
    return (
      <Results
        score={score}
        total={quizQuestions.length}
        answers={answers}
        questions={quizQuestions}
        onRestart={initQuiz}
      />
    );
  }

  return (
    <div className="quiz">
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="progress-text">
        Question {current + 1} of {quizQuestions.length}
      </p>

      <QuestionCard
        question={quizQuestions[current]}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelect}
        showFeedback={showFeedback}
      />

      {showFeedback && (
        <button className="btn-primary next-btn" onClick={handleNext}>
          {current + 1 >= quizQuestions.length ? "See Results" : "Next Question →"}
        </button>
      )}
    </div>
  );
}

export default Quiz;
