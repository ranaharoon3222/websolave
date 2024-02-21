import RichText from "@/components/prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";
import Slider from "react-slick";

const Testimonial = ({ slice }) => {
  const testimonials = [
    {
      id: 1,
      icon: "/images/icon/icon_42.svg",
      feedback:
        "We’v 9,000 agents around the country, Find agents near your neighborhood.",
      name: "John Doe",
    },
    {
      id: 2,
      icon: "/images/icon/icon_42.svg",
      feedback:
        "We’v 9,000 agents around the country, Find agents near your neighborhood.",
      name: "Jane Doe",
    },
    {
      id: 3,
      icon: "/images/icon/icon_42.svg",
      feedback:
        "We’v 9,000 agents around the country, Find agents near your neighborhood.",
      name: "Bob Smith",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings}>
        {slice.items.map((testimonial) => (
          <div className="item" key={testimonial.name}>
            <div className="feedback-block-twelve">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <PrismicNextImage field={testimonial.icon} />
              </div>
              <RichText
                paragraphClassName="tx-dark mt-35 lg-mt-20"
                field={testimonial.feedback}
              />
              <RichText
                paragraphClassName="tx-dark fs-16 fw-500"
                field={testimonial.name}
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
