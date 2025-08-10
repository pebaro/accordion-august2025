import SingleQuestion from './SingleQuestion'

const Accordion = ({accordionQuestions, activeID, toggleQuestion}) => {

  return (
    <section className='container'>
      <h1>q & a section</h1>
      {
        accordionQuestions.map(
          question => <SingleQuestion 
            {...question} 
            key={question.id} 
            activeID={activeID} 
            toggleQuestion={toggleQuestion} ``
          />
        )
      }
    </section>
  )
}

export default Accordion
