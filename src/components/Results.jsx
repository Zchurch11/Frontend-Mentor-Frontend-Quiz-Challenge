import React from 'react'
import Icon from './Icon'
function Results({data, selectedQuizIndex, numberCorrect, questions }) {

  return (
    <div className='resultsInner'>
      <Icon data={data} selectedQuizIndex={selectedQuizIndex} />
      <h2 className="score">{numberCorrect}</h2>
      <small className="scoreDescription">out of {questions.length}</small>
    </div>
  )
}

export default Results