import React from 'react'

function MenuOption({data, onQuizSelect, selectedQuizIndex}) {
  // const selectedQuiz = data[selectedQuizIndex]



 
  return  (
    <>
    {data.map((quiz, index) => (
        <button type='button'
         className="subject"
         key={index}
         onClick={()=> onQuizSelect(index)}
         >
        <div className={`${quiz.title.toLowerCase()}-bg`}>
          <img src={quiz.icon} alt={`${quiz.title} icon`} />
        </div>
        <h2>{quiz.title}</h2>
      </button>
      ))}
    </>
    )
  
}

export default MenuOption