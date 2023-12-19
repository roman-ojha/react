import React from "react";

function Sresult(props) {
  const img = `https://source.unsplash.com/1600x900/?${props.search}`;
  return (
    <>
      <div className="search_img_div">
        <img className="search_img" src={img} alt="Img" />
      </div>
    </>
  );
}

export default Sresult;
