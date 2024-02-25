import React from "react";
import RichText from "../prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const Block = ({ slice }) => {
  return (
    <>
      {slice.items.map((block, index) => (
        <div className="col-sm-6" key={index}>
          <div
            className="card-style-twentyFour bg-white mt-30"
            data-aos={block.data_aos}
            data-aos-delay={block.data_aos_delay}
          >
            <div className="icon">
              <PrismicNextImage
                field={block.icon}
                className="lazy-img mh-100"
              />
            </div>
            <RichText
              heading4={"fw-bold tx-dark mt-30 mb-15"}
              field={block.title}
            />
            <RichText paragraphClassName={"fs-18"} field={block.description} />
          </div>
          {/* /.card-style-twentyFour */}
        </div>
      ))}
    </>
  );
};

export default Block;
