import React from "react";
import { oneMonthTraining, twoMonthsTrainning } from "@/data/training/training";
import TrainingLayout from "./TrainingLayout";


const Training = () => {
    const trainings = [oneMonthTraining, twoMonthsTrainning]
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center mt-5 font-bold text-xl">Course Curriculum</h1>
          {trainings.map((training, i) => (
         <TrainingLayout key={i} training = {training}/>
     ))}
    </div>
  );
};

export default Training;
