import RichText from "@/components/prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const FancyBlock2 = ({ slice }) => {
  const cardsData = [
    {
      icon: "/images/icon/icon_09.svg",
      title: "Quality Design",
      subtitle: "We do focus on quality not quantity.",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_10.svg",
      title: "Expert Support",
      subtitle: "Expert ready to help you anytime.",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Mobile Friendly",
      subtitle: "All design compitable with mobile.",
      delay: "300",
    },
  ];

  return (
    <>
      <div className="card-style-two mt-40">
        <div className="icon d-flex align-items-end">
          <PrismicNextImage field={slice.icon} />
          {/* <img src={card.icon} alt="" className="lazy-img" /> */}
        </div>
        <RichText
          em={"d-inline-block text-uppercase fs-14 opacity-75 mt-15 mb-10"}
          field={slice.title}
        />
        {/* <span className="d-inline-block text-uppercase fs-14 opacity-75 mt-30 mb-10">
          {card.title}
        </span> */}
        <RichText heading4={"fw-500 m0"} field={slice.description} />
        {/* <h4 className="fw-500 m0">{card.subtitle}</h4> */}
      </div>
      {/* /.card-style-two */}
    </>
  );
};

export default FancyBlock2;
