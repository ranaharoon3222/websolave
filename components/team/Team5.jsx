import React from "react";
import RichText from "../prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const teamMembers = [
  {
    id: 1,
    name: "Zubayer Al Hasan",
    role: "Developer",
    image: "/images/team/img_17.jpg",
    dataAosDelay: "",
  },
  {
    id: 2,
    name: "Jannatul Ferdaus",
    role: "CEO",
    image: "/images/team/img_16.jpg",
    dataAosDelay: "200",
  },
  {
    id: 3,
    name: "Rashed Kabir",
    role: "Designer",
    image: "/images/team/img_18.jpg",
    dataAosDelay: "300",
  },
  {
    id: 4,
    name: "Angelina Shelly",
    role: "Analyst",
    image: "/images/team/img_19.jpg",
    dataAosDelay: "400",
  },
  // Add more team members as needed
];

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
              {/* <img
                src={member.image}
                alt={member.name}
                className="lazy-img team-img w-100"
              /> */}
              <div className="info text-center">
                <RichText
                  heading5={"tx-dark fw-500 mb-5"}
                  field={member.name}
                />
                <RichText
                  paragraphClassName={"tx-dark opacity-75"}
                  field={member.role}
                />
                {/* <h5 className="tx-dark fw-500 mb-5">{member.name}</h5> */}
                {/* <div className="tx-dark opacity-75">{member.role}</div> */}
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
