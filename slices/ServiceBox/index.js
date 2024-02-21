import Blog from "@/components/home-page/home-10/Blog";
import FancyBlock2 from "@/components/home-page/home-10/FancyBlock2";
import Services from "@/components/home-page/home-10/Services";
import RichText from "@/components/prismic/RichText";
import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ServiceBoxSlice} ServiceBoxSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceBoxSlice>} ServiceBoxProps
 * @param {ServiceBoxProps}
 */
const ServiceBox = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <div className="fancy-feature-one">
          <div className="mb-0">
            <div className="inner-content pt-110 lg-pt-60 md-pt-30">
              <div className="row gx-xxl-5">
                {slice.items.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`col-lg-3 col-sm-6`}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}
                    >
                      <Services item={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {slice.variation === "featuresWrapper" && (
        <div className="wrapper pt-110 lg-pt-80">
          <div className="container">
            <div className="row justify-content-between">
              {slice.items.map((card, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={card.delay}
                >
                  <FancyBlock2 slice={card} />
                  {/* /.card-style-two */}
                </div>
              ))}
              {/* <FancyBlock2 slice={slice} /> */}
            </div>
          </div>
        </div>
      )}
      {slice.variation === "blogSectionOne" && (
        <div className="blog-section-one p-30 mt-180 lg-mt-120">
          <div className="bg-wrapper pt-140 pb-170 lg-pt-100 lg-pb-100 position-relative">
            <div className="shapes shape-one" />
            <img
              src="/images/shape/shape_16.svg"
              alt="icon"
              className="lazy-img shapes shape-two"
            />
            <div className="shapes shape-three" />

            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <div className="title-style-one text-center text-sm-start xs-mb-30">
                    <RichText
                      heading2={"main-title fw-bold tx-dark m0"}
                      field={slice.primary.title}
                    />
                  </div>
                  {/* /.title-style-one */}
                </div>
                <div className="col-lg-6 col-sm-5 ms-auto d-flex justify-content-center justify-content-sm-end">
                  <PrismicNextLink
                    field={slice.primary.button_link}
                    className={"btn-one fw-500"}
                  >
                    {slice.primary.button_label}
                  </PrismicNextLink>
                </div>
              </div>
              {/* End .row */}

              <div className="row pt-50 lg-pt-30">
                <Blog slice={slice} />
              </div>
            </div>
            {/* /.container */}
          </div>
          {/* /.bg-wrapper */}
        </div>
      )}
    </section>
  );
};

export default ServiceBox;
