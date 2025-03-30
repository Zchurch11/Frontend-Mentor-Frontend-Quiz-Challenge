import React from 'react'

function Icon({ data }) {
    
  return (
    <div className="iconContainer">
        <div className={`${data.title.toLowerCase()}-bg`}>
            <img className='quizIcon' src={data.icon} />
        </div>
        <span className="quizSubject">{data.title}</span>
    </div>
  )
}

export default Icon