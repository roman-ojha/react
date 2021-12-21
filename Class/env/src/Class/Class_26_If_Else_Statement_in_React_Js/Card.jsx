import React from "react";
import Image from "./Image";

function Card(props) {
  return (
    <>
      {/* ------------------------------------------------------- */}
      <a href={props.link} target="_blank">
        <div className="cards">
          <div className="card">
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
