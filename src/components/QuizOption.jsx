import React from 'react'

function QuizOption({
    questions, 
    questionIndex,
    handleOption,
    selectedOption,
    isCorrect,
    isSubmitted}) {

    const currentQuestion = questions[questionIndex]
    const correctAnswer = currentQuestion.answer

  return (
    <>{currentQuestion.options.map((option, index) => (
      <div className="quiz-option" key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name={`option${index}`}
              // tabIndex={1}
              checked={selectedOption === option}
              onChange={handleOption}
              value={option}
              disabled={isSubmitted}
            />
            <label 
            className={`subject ${
                selectedOption === option && !isSubmitted
                  ? 'checked' // Add 'checked' class if the option is selected but not submitted
                  : isSubmitted && option === correctAnswer
                  ? 'correct' // Add 'correct' class if the option is the correct answer
                  : isSubmitted && selectedOption === option && isCorrect === false
                  ? 'incorrect' // Add 'incorrect' class if the selected option is wrong
                  : ''
              }`} htmlFor={`option${index}`}>
              <span className="bg-grey">{String.fromCharCode(65 + index)}</span>
              <p className="answer">{option}</p>
              {isSubmitted && option === correctAnswer && (
              <img className="icon" src="./assets/images/icon-correct.svg" alt="" />
            )}
            {/* Show the incorrect icon if the selected answer is wrong */}
            {isSubmitted &&
              selectedOption === option &&
              isCorrect === false && (
                <img className="icon" src="./assets/images/icon-incorrect.svg" alt="" />
              )}
            </label>
          </div>
    ))}</>
  )
}

export default QuizOption