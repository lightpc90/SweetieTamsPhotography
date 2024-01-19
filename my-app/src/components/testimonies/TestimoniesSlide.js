"use client";

import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";

import { testimonies } from "@/data/testimonies/Testimonies";
import TestimonyLayout from "./TestimonyLayout";

const TestimoniesSlide = () => {
  return (
    <div className="slide-container w-full">
      <Fade>
        {testimonies.map((testimony, i) => (
          <div key={i} className="w-full">
            <div
              className="flex justify-center min-h-[250px] lg:min-h-[400px] items-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url()` }}
                >
                    <TestimonyLayout testimony={testimony}/>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default TestimoniesSlide;
