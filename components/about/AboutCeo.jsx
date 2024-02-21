import Image from "next/image";
import React from "react";
import RichText from "../prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const AboutCeo = ({ slice }) => {
  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <li key={index}>
      <i className="bi bi-star-fill" />
    </li>
  ));

  return (
    <>
      {/* section start */}
      <div className="row">
        <div className="col-lg-5 col-md-6 ms-auto order-md-last">
          <div className="block-style-one pt-35" data-aos="fade-left">
            <div className="title-style-one">
              <RichText
                paragraphClassName="sc-title text-uppercase mb-0"
                field={slice.primary.top_text}
              />
              <RichText
                heading2="main-title fw-bold tx-dark m0"
                field={slice.primary.title}
              />
            </div>

            <RichText
              heading4="tx-dark pt-65 pb-20 lg-pt-40 lg-pb-10"
              field={slice.primary.question}
            />
            <RichText
              paragraphClassName="fs-20 mb-0"
              field={slice.primary.answer}
            />
            <RichText
              paragraphClassName="fs-18 mb-10 pt-30 lg-pt-20"
              em={"fw-500 tx-dark"}
              field={slice.primary.bottom_text}
            />
            <ul className="d-flex style-none rating">{starIcons}</ul>
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6 order-md-first " data-aos="fade-right">
          <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 md-mt-50 sm-mt-80">
            <PrismicNextImage
              className="lazy-img h-auto"
              field={slice.primary.image}
            />
            <Image
              width={132}
              height={126}
              src="/images/shape/shape_09.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <Image
              width={8}
              height={8}
              src="/images/shape/shape_10.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
            <div className="shapes shape-three" />
            <Image
              width={8}
              height={8}
              src="/images/shape/shape_11.svg"
              alt="shape"
              className="lazy-img shapes shape-four"
            />
            <Image
              width={810}
              height={10}
              src="/images/shape/shape_12.svg"
              alt="shape"
              className="lazy-img shapes shape-five"
            />
            <div className="shapes shape-six" />
            <Image
              width={18}
              height={16}
              src="/images/shape/shape_13.svg"
              alt="shape"
              className="lazy-img shapes shape-seven"
            />

            <div className="card-one" data-aos="fade-up" data-aos-delay="200">
              <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                <PrismicNextImage
                  field={slice.primary.icon}
                  sizes="100vw"
                  className="lazy-img"
                />
              </div>
              <div className="name fs-18 fw-500 tx-dark mb-10 flex">
                <RichText
                  field={slice.primary.card_one_name}
                  em={"opacity-50"}
                />
              </div>
              <RichText
                paragraphClassName="fs-18 m0"
                field={slice.primary.card_one_text}
              />
            </div>
            {/* /.card-one */}
          </div>
          {/* /.img-meta */}
        </div>
      </div>
      {/* section end */}
    </>
  );
};

export default AboutCeo;
