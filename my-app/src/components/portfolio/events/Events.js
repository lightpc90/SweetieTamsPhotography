import React from "react";
import { events } from "@/data/portfolio/events/Events";
import Image from "next/image";

const Events = () => {
  return (
    <div>
      <div className="font-bold text-5xl lg:text-7xl text-center">Wedding & Event</div>
      <div className="flex flex-wrap justify-center items-center gap-3 my-10">
        {events.map((img, i) => (
          <Image
            src={img}
            alt={`${img}`}
            width={600}
            height={600}
            key={i}
            className="w-10/12 lg:w-4/12 shadow-md"
          />
        ))}
      </div>
    </div>
  );
};
export default Events;
