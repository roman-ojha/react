import React from "react";
import { AboutImage } from "../../Practice/Practice04Router";
import { useContext } from "react";
import About from "./About";

function ComponentX() {
  const aboutImg = useContext(AboutImage);
  return (
    <>
      {/* <AboutImage.Consumer>
        {(aboutImg) => {
          return (
            <>
              <img
                
                src={aboutImg}
                alt="img"
              />
            </>
          );
        }}
      </AboutImage.Consumer> */}
      <img style={{ width: "80px", height: "50px" }} src={aboutImg} alt="img" />
    </>
  );
}

export default ComponentX;
