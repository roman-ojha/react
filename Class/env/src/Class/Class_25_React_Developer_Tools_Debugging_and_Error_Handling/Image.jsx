import React from "react";

function Image(props) {
  return <img src={props.imgsrc} alt="myPic" className="card_img" />;
  //   so, we will see an error like: 'props' is not define it is because we have not pass props Jsx property in this component
  //
}

export default Image;
