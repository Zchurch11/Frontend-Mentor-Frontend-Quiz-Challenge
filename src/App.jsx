import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import data from './data.json'
console.log(data.quizzes)
function App() {
const [theme, setTheme] = useState('light')
const [selectedQuizIndex, setSelectedQuizIndex] = useState(null)
const [questionIndex, setQuestionIndex] = useState(0)
const [numberCorrect, setNumberCorrect] = useState(0)
const [isError, setIsError] = useState(false)
const [isSubmitted, setIsSubmitted] = useState(false)
const [isCorrect, setIsCorrect] = useState(null)
const [selectedOption, setSelectedOption] = useState(null)
const [isQuizComplete, setIsQuizComplete] = useState(false)
const [isShowingResults, setIsShowingResults] = useState(false);
const { quizzes } = data


const handleQuizSelection = (index) => {
  setSelectedQuizIndex(index)
  setQuestionIndex(0)
  setIsCorrect(null)
}
const handleNextQuestion = () =>{
  if(questionIndex < quizzes[selectedQuizIndex].questions.length - 1){
    setQuestionIndex((prevIndex) => prevIndex + 1)
    setIsCorrect(null)
    setIsSubmitted(false)
    setSelectedOption(null)
  } else {
    setIsQuizComplete(true)
  }
}
const handleOption = (e) =>{
  setSelectedOption(e.target.value)
  setIsError(false)
}
const handleSubmitAnswer = () => {
  if (selectedOption === null){
    setIsError(true)
    console.log('No option selected. Submission prevented.')
    return
  }
  const currentQuestion = quizzes[selectedQuizIndex]?.questions[questionIndex]
  setIsSubmitted(true)
  if (selectedOption === currentQuestion.answer){
    setNumberCorrect((prev) => prev + 1)
    setIsCorrect(true)
  } else{
    setIsCorrect(false)
  }
}
if (selectedQuizIndex !== null) {
  console.log('Selected Quiz:', quizzes[selectedQuizIndex]);
  console.log('Questions:', quizzes[selectedQuizIndex]?.icon);
}

const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light'
  console.log('Theme toggled:', newTheme)
  setTheme(newTheme)
  document.documentElement.setAttribute('data-theme', newTheme)
}
const handleBackToMenu = () =>{
  setIsShowingResults(false)
  setSelectedQuizIndex(null)
  setQuestionIndex(0)
  setIsSubmitted(false)
  setSelectedOption(null)
  setIsCorrect(null)
  setNumberCorrect(0)
  setIsQuizComplete(false)
}

const handleShowResults = () =>{
  setIsShowingResults(true)
}

  return (
    <>
      <Header selectedQuizIndex={selectedQuizIndex} data={quizzes[selectedQuizIndex]} theme={theme} 
      toggleTheme={toggleTheme} />
      {selectedQuizIndex === null && <Menu data={quizzes} selectedQuizIndex={selectedQuizIndex} onQuizSelect={handleQuizSelection} /> }
      
      {selectedQuizIndex !== null && 
      <Quiz  data={quizzes[selectedQuizIndex]}
       handleNextQuestion={handleNextQuestion}
       questionIndex={questionIndex}
       handleSubmitAnswer={handleSubmitAnswer}
       handleOption={handleOption}
       selectedOption={selectedOption}
       selectedQuizIndex={selectedQuizIndex}
       isCorrect={isCorrect}
       isSubmitted={isSubmitted}
       isError={isError}
       isQuizComplete={isQuizComplete}
       handleBackToMenu={handleBackToMenu}
       handleShowResults={handleShowResults}
       isShowingResults={isShowingResults}
       numberCorrect={numberCorrect}

       />}
    </>
  )
}

export default App
