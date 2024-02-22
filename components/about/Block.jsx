import Image from "next/image";
import React from "react";
import RichText from "../prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const blocksData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_152.svg",
    title: "Quality Service",
    content: "Elit esse cillum dolore eu fugiat nulla pariatur",
    dataAos: "fade-up",
    dataAosDelay: "",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_153.svg",
    title: "24x7 Support",
    content: "Elit esse cillum dolore eu fugiat nulla pariatur",
    dataAos: "fade-up",
    dataAosDelay: "100",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_154.svg",
    title: "Great Pricing",
    content: "Elit esse cillum dolore eu fugiat nulla pariatur",
    dataAos: "fade-up",
    dataAosDelay: "200",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_155.svg",
    title: "100% Trusted",
    content: "Elit esse cillum dolore eu fugiat nulla pariatur",
    dataAos: "fade-up",
    dataAosDelay: "300",
  },
  // Add more blocks as needed
];

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
              {/* <Image
                width={45}
                height={42}
                src={block.iconSrc}
                alt="icon"
                className="lazy-img mh-100"
              /> */}
            </div>
            <RichText
              heading4={"fw-bold tx-dark mt-30 mb-15"}
              field={block.title}
            />
            <RichText paragraphClassName={"fs-18"} field={block.description} />
            {/* <h4 className="fw-bold tx-dark mt-30 mb-15">{block.title}</h4> */}
            {/* <p className="fs-18">{block.content}</p> */}
          </div>
          {/* /.card-style-twentyFour */}
        </div>
      ))}
    </>
  );
};

export default Block;
