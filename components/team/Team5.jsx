import React from "react";
import RichText from "../prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const Team5 = ({ slice }) => {
  return (
    <>
      {slice.items.map((member, index) => (
        <div className="col-lg-3 col-sm-6" key={index}>
          <div
            className="team-block-three position-relative pb-40 lg-pb-30"
            data-aos="fade-up"
            data-aos-delay={member.data_delay}
          >
            <div className="img-meta">
              <PrismicNextImage
                field={member.image}
                className="lazy-img team-img w-100 h-auto"
              />

              <div className="info text-center">
                <RichText
                  heading5={"tx-dark fw-500 mb-5"}
                  field={member.name}
                />
                <RichText
                  paragraphClassName={"tx-dark opacity-75"}
                  field={member.role}
                />
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-three */}
        </div>
      ))}
    </>
  );
};

export default Team5;
