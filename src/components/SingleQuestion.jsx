import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const SingleQuestion = ({ id, title, info, activeID, toggleQuestion }) => {
  const [showAnswer, setShowAnswer] = useState( false )
  const isActive = id === activeID

  return (
    <article className='question'>
      <header>
        <h5>{ title }</h5>
        <button
          type='button'
          className='question-btn'
          onClick={() => toggleQuestion( id )}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      
      { isActive && <p>{info}</p> }
    </article>
  )
}

export default SingleQuestion
