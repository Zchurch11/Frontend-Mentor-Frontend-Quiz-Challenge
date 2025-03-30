import React from 'react'

import Button from './Button'
import QuizOption from './QuizOption'
import Question from './Question'
import Results from './Results'
function Quiz({
  data,
  questionIndex,
  handleNextQuestion,
  handleSubmitAnswer,
  handleOption,
  selectedOption,
  isCorrect,
  isSubmitted,
  isError,
  isQuizComplete, 
  handleBackToMenu, 
  handleShowResults,
  isShowingResults, 
  numberCorrect,
  selectedQuizIndex}) {
  const { questions } = data;

  return (
    <main>
        <div className="row">
            <Question isShowingResults={isShowingResults} questions={questions} questionIndex={questionIndex} />
            
          <div>
          <div className={isShowingResults ? 'results' : 'col'}>
            {isShowingResults ? (<Results numberCorrect={numberCorrect}
             data={data} selectedQuizIndex={selectedQuizIndex} questions={ questions} />) : (
            <div className="subjects">
              <QuizOption 
              questionIndex={questionIndex} 
              questions={questions}
              isCorrect={isCorrect}
              selectedOption={selectedOption}
              handleOption={handleOption}
              isSubmitted={isSubmitted}
              handleBackToMenu={handleBackToMenu}
              handleShowResults={handleShowResults}
             />
            </div>
          )}
            
          </div><Button 
            handleSubmitAnswer={handleSubmitAnswer}
            handleNextQuestion={handleNextQuestion}
            handleShowResults={handleShowResults}
            handleBackToMenu={handleBackToMenu}
            isSubmitted={isSubmitted}
            isError={isError}
            isQuizComplete={isQuizComplete}
            isShowingResults={isShowingResults}
            questionIndex={questionIndex}
            questions={questions} />
            {isError && selectedOption === null && <small className='errorMessage'><img src="./assets/images/icon-error.svg" alt="" />Please select an answer</small>}
          </div>
        </div>
      </main>
  )
}

export default Quiz