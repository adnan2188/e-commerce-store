import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
const title = "More Then 60,000 Customers";
import avater from "../assets/images/clients/01.png";
const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  {
    // imgUrl: "/src/assets/images/clients/avater.png",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    // imgUrl: "/src/assets/images/clients/avater.png",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    // imgUrl: "/src/assets/images/clients/avater.png",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    // imgUrl: "/src/assets/images/clients/avater.png",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    // imgUrl: "/src/assets/images/clients/avater.png",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    // imgUrl: "/src/assets/images/clients/avater.png",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    // imgUrl: "/src/assets/images/clients/avater.png",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];

const LocationSprade = () => {
  return (
    <>
      <div className="client-section style-2 padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
          </div>
          <div className="section-wrapper">
            <div className="clients">
              {clientsList.map((val, i) => (
                <div key={i} className="client-list">
                  <Link to="/signup" className="client-content">
                    <span>{val.text}</span>
                  </Link>
                  <div className="client-thumb">
                    <Image src={avater} alt={val.imgAlt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSprade;
