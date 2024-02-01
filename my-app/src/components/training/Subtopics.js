import React from 'react'

const Subtopics = ({eachTopic}) => {
  return (
      <div className='pl-2'>
          {eachTopic.subtopics.map((subtopic, i) => (
              <p key={i}>{`- ${subtopic}` }</p>
          ))}
    </div>
  )
}

export default Subtopics