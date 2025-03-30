import React from 'react'
import Icon from './Icon'
function Header({toggleTheme, theme, selectedQuizIndex, data}) {
  
  return (
    <header>
      {selectedQuizIndex !== null && <Icon data={data} selectedQuizIndex={selectedQuizIndex} />}
      
      
        <div className="themeToggle">
          <img 
          src={theme === 'light' ? "./assets/images/icon-sun-dark.svg" 
          : "./assets/images/icon-sun-light.svg"} alt="" />
          <input 
          type="checkbox" 
          name="checkbox" 
          id="checkbox" 
          onChange={toggleTheme}
          checked={theme === 'dark'}
          aria-label='Toggle theme'
          tabIndex={1} />
          <label 
          className='themeSwitch' 
          htmlFor="checkbox"
          >
            
            <div className="slider round" ></div>
          </label>
          <img src={theme === 'light' ? "./assets/images/icon-moon-dark.svg" 
          : "./assets/images/icon-moon-light.svg"} alt="" />
        </div>
      </header>
  )
}

export default Header