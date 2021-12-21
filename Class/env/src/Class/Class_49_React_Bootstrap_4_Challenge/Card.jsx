import React from 'react';

const Card=(props)=>{
    return (
        <>
        <div class="card" >
        <img
          src={props.src}
          class="card-img-top"
          alt="Img"
          />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href={props.src}
            class="btn btn-primary "
            target="_blank"
            >
            Go somewhere
          </a>
        </div>
      </div>
        </>
    );
}

export default Card;