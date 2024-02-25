import RichText from "@/components/prismic/RichText";
import Testimonial from "@/components/home-page/home-6/Testimonial";
import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.TestimonialFeedbackTwoSlice} TestimonialFeedbackTwoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialFeedbackTwoSlice>} TestimonialFeedbackTwoProps
 * @param {TestimonialFeedbackTwoProps}
 */
const TestimonialFeedbackTwo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="feedback-section-two position-relative pt-150 pb-150 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="title-style-three text-center mb-70 lg-mb-40">
                <div
                  className="icon d-flex align-items-center justify-content-center rounded-circle"
                  style={{ background: `${slice.primary.icon_bg}` }}
                >
                  <PrismicNextImage
                    field={slice.primary.icon}
                    className="lazy-img"
                  />
                </div>
                <RichText
                  heading2={"main-title fw-500"}
                  em={"position-relative mark-bg "}
                  field={slice.primary.title}
                />
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <Testimonial slice={slice} />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="circle-bg shapes">
          <PrismicNextImage
            field={slice.primary.bg_image}
            className="lazy-img main-img m-auto"
          />
          <PrismicNextImage
            field={slice.primary.image_one}
            className="lazy-img shapes rounded-circle cp-one"
            style={{ width: "80px", height: "80px" }}
          />

          <PrismicNextImage
            field={slice.primary.image_two}
            className="lazy-img shapes rounded-circle cp-two"
            style={{ width: "45px", height: "45px" }}
          />

          <PrismicNextImage
            field={slice.primary.image_three}
            className="lazy-img shapes rounded-circle cp-three"
            style={{ width: "85px", height: "85px" }}
          />

          <PrismicNextImage
            field={slice.primary.image_four}
            className="lazy-img shapes rounded-circle cp-four"
            style={{ width: "45px", height: "45px" }}
          />

          <PrismicNextImage
            field={slice.primary.image_five}
            className="lazy-img shapes rounded-circle cp-five"
            style={{ width: "110px", height: "110px" }}
          />

          <PrismicNextImage
            field={slice.primary.image_six}
            className="lazy-img shapes rounded-circle cp-six"
            style={{ width: "55px", height: "55px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialFeedbackTwo;
