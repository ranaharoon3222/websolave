import Testimonial from "@/components/home-page/home-5/Testimonial";
import RichText from "@/components/prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialFeedbackSectionSlice} TestimonialFeedbackSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialFeedbackSectionSlice>} TestimonialFeedbackSectionProps
 * @param {TestimonialFeedbackSectionProps}
 */
const TestimonialFeedbackSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="pt-180 pb-180 lg-pt-100 lg-pb-100 position-relative zn2">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <RichText
                    heading2={"main-title fw-500 tx-dark"}
                    field={slice.primary.title}
                  />
                </div>
                {/* /.title-style-five */}
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testimonial slice={slice} />
                  </div>
                  {/* /.feedback_slider_eleven */}
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <PrismicNextImage
                    field={slice.primary.image}
                    className="lazy-img ms-auto h-auto"
                  />

                  <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <RichText
                      strong={"fw-500"}
                      field={slice.primary.rating_count}
                    />
                    <RichText field={slice.primary.rating_text} />
                  </div>
                  {/* /.rating-box */}

                  <img
                    src="/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                  />
                  <img
                    src="/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* End .container */}
        <PrismicNextImage
          field={slice.primary.left_image}
          className="lazy-img shapes shape-three"
        />
      </div>
    </section>
  );
};

export default TestimonialFeedbackSection;
