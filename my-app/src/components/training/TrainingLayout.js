'use client'

import {useState} from 'react'
import Subtopics from './Subtopics';

const TrainingLayout = ({ training }) => {
    const [topicOpened, setTopicOpened] = useState(false)
    return (
      <div className='p-3'>
        <h4 className='font-bold'>{`${training.duration} Training`}</h4>
        <div>
          {training.topics.map((eachTopic, i) => (
            <section key={i}>
                  <h4 className='font-bold text-gray-500 py-2'>{`Week ${i + 1}: ${eachTopic.topic}`}</h4>
                  
              <Subtopics key={i} eachTopic={eachTopic} />
            </section>
          ))}
        </div>
        <h2 className='font-semibold'>Fee</h2>
        <p>{`- Fee for the cass = ${training.fee}`}</p>
        <p>{`- Duration = ${training.duration}`}</p>
      </div>
    );
}

export default TrainingLayout