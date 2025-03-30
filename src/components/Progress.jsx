import React from 'react'

function Progress({ questionIndex }) {
  const progressStyle = {
    width:`${questionIndex + 1}0%`,
    display: 'block',
    backgroundColor: 'var(--dark-purple)',
    borderRadius: '104px',
    height: '8px',
  }
  return (
    <div className='progressContainer'>
        <span className="progress" style={progressStyle} ></span>
    </div>
  )
}

export default Progress