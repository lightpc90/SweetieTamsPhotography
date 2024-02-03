'use client'

import {useState} from 'react'

const Subtopics = ({ eachTopic, i }) => {
  const [topicOpened, setTopicOpened] = useState(false)
  return (
    <div className="pl-2 lg:pl-6">
      <h4
        onClick={() => {
          setTopicOpened(!topicOpened);
        }}
        className="font-bold text-gray-500 py-2 cursor-pointer bg-white p-2 my-1 shadow-md rounded-md inline-block"
      >{`Week ${i + 1}: ${eachTopic.topic}`}</h4>
      {topicOpened && (
        <h4 className='bg-gray-800 text-white p-2'>
          {eachTopic.subtopics.map((subtopic, i) => (
            <p key={i}>{`- ${subtopic}`}</p>
          ))}
        </h4>
      )}
    </div>
  );
}

export default Subtopics