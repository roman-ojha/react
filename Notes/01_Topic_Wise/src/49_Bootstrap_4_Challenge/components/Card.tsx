import React from "react";

interface CardProps {
  src: string;
}

const Card: React.FC<CardProps> = (props): JSX.Element => {
  return (
    <>
      <div className="card">
        <img src={props.src} className="card-img-top" alt="Img" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href={props.src}
            className="btn btn-primary "
            target="_blank"
            rel="noreferrer"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
