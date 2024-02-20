import React from "react";
import RichText from "@/components/prismic/RichText";

const FeatureOne = ({ slice }) => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <div className="title-style-one text-center text-lg-start">
            <RichText
              heading2={"main-title fw-bold tx-dark m0"}
              field={slice?.primary.title}
            />
          </div>
          {/* /.title-style-one */}
        </div>
        <div className="col-lg-5 ms-auto" data-aos="fade-left">
          <RichText
            paragraphClassName={"text-lg text-center text-lg-start md-pt-30 m0"}
            field={slice?.primary.sub_title}
          />
        </div>
      </div>
    </>
  );
};

export default FeatureOne;
