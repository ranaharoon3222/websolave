import React from "react";
import RichText from "../prismic/RichText";

const Hero = ({ slice }) => {
  return (
    <div className="inner-banner-three text-center p-30">
      <div
        className="bg-wrapper text-center"
        style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
      >
        <div className="container">
          <div className="title-style-five">
            <RichText
              heading2={"main-title tx-dark fw-bold"}
              field={slice.primary.title}
            />
          </div>
          <RichText
            paragraphClassName="fs-20 mt-30 lg-mt-20"
            field={slice.primary.sub_title}
          />
        </div>
        {/* End container */}
      </div>
      {/* /.bg-wrapper */}
    </div>
  );
};

export default Hero;
