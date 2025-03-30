import React from 'react'
import Progress from './Progress'
function Question({questions, questionIndex, isShowingResults}) {
  return isShowingResults ? (
    <>
      <div className="col text">
      <div className="textContainer">
        <h1>Quiz completed <span className="subTitle">You scored...</span></h1>
      </div>
      </div>
    </>
  ) : (
    <div className="col text">
      <small className="styledText">Question {questionIndex + 1} of 10</small>
      <p className="question">{questions[questionIndex].question}</p>
      <Progress questionIndex={questionIndex} />
    </div>
  );
}

export default Question