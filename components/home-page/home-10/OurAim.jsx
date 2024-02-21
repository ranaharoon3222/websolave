import RichText from "@/components/prismic/RichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const OurAim = ({ slice }) => {
  const imageItems = [
    {
      src: "/images/shape/shape_09.svg",
      alt: "shape",
      className: "shapes shape-one",
    },
    {
      src: "/images/shape/shape_10.svg",
      alt: "shape",
      className: "shapes shape-two",
    },
    {
      src: "/images/shape/shape_11.svg",
      alt: "shape",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_12.svg",
      alt: "shape",
      className: "lazy-img shapes shape-five",
    },
    {
      src: "/images/shape/shape_13.svg",
      alt: "shape",
      className: "lazy-img shapes shape-seven",
    },
  ];
  return (
    <div className="row">
      <div className="col-lg-5 col-md-6 ms-auto order-md-last">
        <div className="block-style-one pt-35" data-aos="fade-left">
          <div className="title-style-one">
            <RichText
              paragraphClassName="sc-title text-uppercase"
              field={slice.primary.top_text}
            />
            <RichText
              heading2="main-title fw-bold tx-dark m0"
              field={slice.primary.title}
            />
          </div>

          <RichText
            paragraphClassName="text-lg tx-dark pt-35 pb-40 lg-pb-20"
            field={slice.primary.description}
          />
          {slice.items.map((item, index) => (
            <RichText
              field={item.text_list}
              key={index}
              list={"style-none list-item fs-18"}
            />
          ))}
        </div>
        <PrismicNextLink
          field={slice.primary.more_btn_link}
          className="more-btn tran3s fw-500 fs-18"
          data-aos="fade-left"
        >
          {slice.primary.more_btn_label} <i className="bi bi-arrow-right"></i>
        </PrismicNextLink>
      </div>
      {/* End .col */}

      <div className="col-md-6 order-md-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 md-mt-50 sm-mt-80">
          <PrismicNextImage
            field={slice.primary.image}
            className="lazy-img h-auto"
          />
          {imageItems.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={item.className}
            />
          ))}

          <div className="card-one" data-aos="fade-up" data-aos-delay="200">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <PrismicNextImage
                field={slice.primary.icon}
                sizes="100vw"
                className="lazy-img"
              />
            </div>
            <div className="name fs-18 fw-500 tx-dark mb-10 flex">
              <RichText field={slice.primary.card_one_name} em={"opacity-50"} />
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
  );
};

export default OurAim;
