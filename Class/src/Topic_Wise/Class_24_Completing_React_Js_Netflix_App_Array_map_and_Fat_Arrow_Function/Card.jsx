import React from "react";

function Card(props) {
  // so, after making an attribute in JSX we have to pass that attribute as an argument in the function
  // now, those attribute that are defined in the JSX element those can be able to access as an Object.
  return (
    <>
      {/* ------------------------------------------------------- */}{" "}
      {/* This
        part is like a card or the component which is being used in the website a
        lot of time so for that reason we will use props */}
      <a href={props.link} target="_blank">
        <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card_img" />
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
