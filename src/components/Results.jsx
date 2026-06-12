function Results({ score, total, answers, questions, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  const grade = () => {
    if (percentage >= 90) return { label: "Expert 🏆", color: "#22c55e" };
    if (percentage >= 70) return { label: "Proficient 🎯", color: "#3b82f6" };
    if (percentage >= 50) return { label: "Developing 📚", color: "#f59e0b" };
    return { label: "Beginner 🌱", color: "#ef4444" };
  };

  const { label, color } = grade();

  return (
    <div className="results">
      <h2 className="results-title">Quiz Complete!</h2>
      <div className="score-circle" style={{ borderColor: color }}>
        <span className="score-number" style={{ color }}>
          {score}/{total}
        </span>
        <span className="score-percent" style={{ color }}>
          {percentage}%
        </span>
      </div>
      <p className="grade-label" style={{ color }}>
        {label}
      </p>

      <div className="answer-review">
        <h3>Review Your Answers</h3>
        {questions.map((q, i) => {
          const selected = answers[i];
          const isCorrect = selected === q.answer;
          return (
            <div
              key={q.id}
              className={`review-item ${isCorrect ? "review-correct" : "review-incorrect"}`}
            >
              <p className="review-question">
                <strong>Q{i + 1}.</strong> {q.question}
              </p>
              <p className="review-selected">
                Your answer:{" "}
                <span className={isCorrect ? "text-correct" : "text-incorrect"}>
                  {selected !== null
                    ? `${String.fromCharCode(65 + selected)}. ${q.options[selected]}`
                    : "Not answered"}
                </span>
              </p>
              {!isCorrect && (
                <p className="review-correct-answer">
                  Correct answer:{" "}
                  <span className="text-correct">
                    {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}
                  </span>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button className="btn-primary" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
