import { useState } from 'react'
import Accordion from "./components/Accordion"
import questions from './data'

const App = () => {
  const [accordionQuestions] = useState(questions)
  const [activeID, setActiveID] = useState(null)

  const toggleQuestion = id => {
    const newActiveID = id === activeID ? null : id

    setActiveID(newActiveID)
  }

  return (
    <main>
      <Accordion 
        accordionQuestions={accordionQuestions} 
        activeID={activeID} 
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}

export default App
