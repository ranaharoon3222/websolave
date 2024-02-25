import RichText from "@/components/prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const FancyBlock = ({ slice }) => {
  const images = [
    {
      src: "/images/shape/shape_15.svg",
      alt: "media",
      className: "lazy-img shapes shape-one",
    },
    {
      src: "/images/shape/shape_16.svg",
      alt: "media",
      className: "lazy-img shapes shape-two",
    },
    {
      src: "/images/shape/shape_17.svg",
      alt: "media",
      className: "lazy-img shapes shape-three",
    },
    {
      src: "/images/shape/shape_18.svg",
      alt: "media",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_19.svg",
      alt: "media",
      className: "lazy-img shapes shape-five",
    },
  ];

  const data = {
    title: (
      <>
        We working with <span>knowledge,</span>
        <br /> skills all of heart &amp; soul.
      </>
    ),
    subtitle:
      "Auis nostrud exercitation ullamco labors nis slit alquip Duis aute irure dolor in reprehen erio isu voluptate velit sed.",
    author: "Rashed Kabir",
    authorTitle: "CEO Janu",
  };

  return (
    <div className="row">
      <div className="col-xl-5 col-lg-6 ms-auto order-lg-last">
        <div className="block-style-one md-mb-60" data-aos="fade-left">
          <div className="title-style-one">
            <RichText
              heading2={"main-title fw-bold tx-dark m0"}
              field={slice.primary.title}
            />
          </div>
          {/* /.title-style-one */}
          <RichText
            paragraphClassName={"text-lg pt-60 pb-60 lg-pt-30 lg-pb-30"}
            field={slice.primary.sub_title}
          />

          <RichText
            heading4={"name fs-20 tx-dark fw-500"}
            field={slice.primary.name}
            em={"opacity-25"}
          />
        </div>

        {/* /.block-style-one */}
      </div>
      {/* End .col-xl-5 */}

      <div
        className="col-xl-6 col-lg-5 col-md-8 col-sm-10 order-lg-first"
        data-aos="fade-right"
      >
        <div className="img-meta-two d-inline-block position-relative pb-50">
          <PrismicNextImage
            field={slice.primary.image}
            className="lazy-img h-auto rounded-3"
          />
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}
          <div className="card-one" data-aos="fade-up" data-aos-delay="250">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <PrismicNextImage
                field={slice.primary.icon}
                className="lazy-img"
              />
            </div>
            <RichText
              heading5={"fw-500 m-0"}
              field={slice.primary.card_one_text}
            />
          </div>
          {/* /.card-one */}
        </div>
        {/* /.img-meta-two */}
      </div>
    </div>
  );
};

export default FancyBlock;
