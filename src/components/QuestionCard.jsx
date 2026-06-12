function QuestionCard({ question, selectedAnswer, onSelect, showFeedback }) {
  const getOptionClass = (index) => {
    if (!showFeedback) {
      return selectedAnswer === index ? "option selected" : "option";
    }
    if (index === question.answer) return "option correct";
    if (selectedAnswer === index && index !== question.answer)
      return "option incorrect";
    return "option";
  };

  return (
    <div className="question-card">
      <span className="category-badge">{question.category}</span>
      <h2 className="question-text">{question.question}</h2>
      <ul className="options-list">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              className={getOptionClass(index)}
              onClick={() => !showFeedback && onSelect(index)}
              disabled={showFeedback}
              aria-pressed={selectedAnswer === index}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          </li>
        ))}
      </ul>
      {showFeedback && (
        <div
          className={`feedback ${
            selectedAnswer === question.answer ? "feedback-correct" : "feedback-incorrect"
          }`}
        >
          <strong>
            {selectedAnswer === question.answer ? "✅ Correct!" : "❌ Incorrect"}
          </strong>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
