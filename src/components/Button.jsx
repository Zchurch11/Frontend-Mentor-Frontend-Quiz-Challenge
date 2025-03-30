import React from 'react'

function Button({
  isSubmitted, 
  handleNextQuestion, 
  handleSubmitAnswer, 
  isError, 
  isQuizComplete, 
  handleBackToMenu, 
  handleShowResults, 
  isShowingResults,
  questionIndex,
  questions}) {
 
  const onClickHandler = isQuizComplete
    ? isShowingResults
      ? handleBackToMenu
      : handleShowResults
    : isSubmitted
    ? handleNextQuestion
    : handleSubmitAnswer

  // Determine the button's class
  const buttonClass = isError ? 'submitBtn error' : 'submitBtn'

  // Determine the button's text
  const buttonText = isQuizComplete
  ? isShowingResults
    ? 'Play Again'
    : 'Show Results'
  : isSubmitted 
  ? questionIndex === questions?.length - 1// If it's the last question
    ? 'Show Results'
    : 'Next Question'
: 'Submit Answer'

  return (
    <button onClick={onClickHandler} className={buttonClass} type="button">
      {buttonText}
    </button>
  )
}

export default Button