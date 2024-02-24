import Slider from "react-slick";
import React, { useRef } from "react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../prismic/RichText";

const Testimonial = ({ slice }) => {
  const data = [
    {
      imgSrc: "/images/media/img_02.png",
      backgroundColor: "#825EFF",
      rating: "Very solid, 8.3 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_03.png",
      backgroundColor: "#08CE97",
      rating: "Very solid, 7.2 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_02.png",
      backgroundColor: "#FF8A3A",
      rating: "Very solid, 9.1 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
    {
      imgSrc: "/images/media/img_03.png",
      backgroundColor: "#08CE97",
      rating: "Very solid, 10 out 10",
      text: "We’v 9,000 agents across are country, Find agents near your neighborhood.",
      author: "Martin Jonas",
      country: "USA",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);

  return (
    <>
      <div className="inner-content mt-100 lg-mt-60">
        <div className="feedback_slider_one custom">
          <Slider {...settings} ref={sliderRef} arrows={false}>
            {slice.items.map((item) => (
              <div className="item" key={item.feedback_title}>
                <div className="feedback-block-eleven">
                  <div className="top-header d-flex align-items-center justify-content-between">
                    <div>
                      <RichText
                        heading3={"tx-dark m0"}
                        field={item.feedback_title}
                      />
                      <ul className="style-none d-flex rating pt-15">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <li key={index}>
                            <i className="bi bi-star-fill" />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <img src="/images/icon/icon_112.svg" alt="" width={50} />
                  </div>
                  <RichText
                    paragraphClassName={"tx-dark"}
                    field={item.feedback_description}
                  />
                  <div className="d-flex align-items-center justify-content-between">
                    <RichText
                      heading6="cost fw-500 tx-dark fs-20"
                      em={"opacity-50 fw-normal"}
                      field={item.feedback_name}
                    />
                    <PrismicNextImage
                      field={item.feedback_image}
                      className="rounded-circle"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* /.feedback_slider_one */}
      </div>
      {/* /.inner-content */}
    </>
  );
};

export default Testimonial;
