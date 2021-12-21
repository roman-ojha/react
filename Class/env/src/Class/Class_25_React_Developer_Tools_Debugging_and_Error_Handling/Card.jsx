import React from "react";
import Image from "./Image";

function Card(props) {
  return (
    <>
      {/* ------------------------------------------------------- */}
      <a href={props.link} target="_blank">
        <div className="cards">
          <div className="card">
            {/* So now we can make another component of image but we know that we have used 'porps' in that image component so,*/}
            {/* Now to solve the problem we have to pass the attribute 'props' for the "Image" component */}
            <Image imgsrc={props.imgsrc} />
            <div className="card__info">
              <span className="card__category">{props.title} </span>
              <h3 className="card__title">{props.sname}</h3>
              <button className="button">Watch now</button>
            </div>
          </div>
        </div>
      </a>
      {/* ---------------------------------------------------------- */}
    </>
  );
}
export default Card;
