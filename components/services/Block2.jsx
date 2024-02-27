import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";
import RichText from "../prismic/RichText";

const Block2 = ({ slice }) => {
  return (
    <>
      {slice.items.map((card, index) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
          key={index}
        >
          <div className="card-style-one pe-xxl-5 position-relative mb-90 md-mb-70">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: card.background_color }}
            >
              <PrismicNextImage
                field={card.icon}
                sizes="100vw"
                className="lazy-img"
              />
            </div>
            <RichText
              heading5={"fw-500 mt-35 mb-25 tran3s tx-dark"}
              field={card.title}
              // hyperlink={"tran3s tx-dark"}
            />
            <RichText paragraphClassName="mb-25" field={card.description} />
            {/* <PrismicNextLink field={card.link}>
              <img
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </PrismicNextLink> */}
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
    </>
  );
};

export default Block2;
