import React from 'react'
import MenuOption from './MenuOption'
function Menu({data, onQuizSelect, selectedQuizIndex}) {
  
  return (
    <main>
        <div className="row">
          <div className="col text">
            <h1>Welcome to the <span className='subTitle'>Frontend Quiz!</span></h1>
            <p className='styledText'>Pick a subject to get started.</p>
          </div>
          <div className="col">
            <div className="subjects">
              <MenuOption
              selectedQuizIndex={selectedQuizIndex} 
              data={data}
              onQuizSelect={onQuizSelect}
              />


            </div>
          </div>
        </div>
      </main>
  )
}

export default Menu