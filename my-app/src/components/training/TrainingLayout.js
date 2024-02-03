
import Subtopics from './Subtopics';

const TrainingLayout = ({ training }) => {
    return (
      <div className="p-3">
        <h4 className="font-bold">{`${training.duration} Training`}</h4>
        <div>
          {training.topics.map((eachTopic, i) => (
            <section key={i}>
               <Subtopics key={i} eachTopic={eachTopic} i={i} />
            </section>
          ))}
        </div>
        <h2 className="font-semibold">Fee</h2>
        <p>{`- Fee for the cass = ${training.fee}`}</p>
        <p>{`- Duration = ${training.duration}`}</p>
      </div>
    );
}

export default TrainingLayout