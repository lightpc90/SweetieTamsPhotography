import React from "react";
import fashion from "../../../public/Fashion/LFW19.jpg";
import remote from "../../../public/Remote/Y3.jpg";
import portrait from "../../../public/Portrait and Headshot/EASYN1.jpg";
import event from "../../../public/Wedding and Event/R23.jpg";
import PortfolioCardLayout from "./portfolioCardLayout";
const PortfolioCards = () => {
  const coverPictures = [
    { img: portrait, name: "Portrait", link:"/portfolio/portraits" },
    { img: fashion, name: "Fashion", link: "/portfolio/fashions" },
    { img: remote, name: "Remote", link: "/portfolio/remotes" },
    { img: event, name: "Wedding & Event", link:"/portfolio/events" },
  ];
  return <div className="flex lg:w-8/12  justify-center items-center flex-wrap gap-3">
    {coverPictures.map((coverPicture, i) => (
      <PortfolioCardLayout key={i} coverPicture={coverPicture}/>
    ))}
  </div>;
};

export default PortfolioCards;
