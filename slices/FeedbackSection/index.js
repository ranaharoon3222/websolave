import Testimonial from "@/components/home-page/home-10/Testimonial";
import RichText from "@/components/prismic/RichText";
import ServiceTestimonial from "@/components/services/Testimonial";

/**
 * @typedef {import("@prismicio/client").Content.FeedbackSectionSlice} FeedbackSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeedbackSectionSlice>} FeedbackSectionProps
 * @param {FeedbackSectionProps}
 */
const FeedbackSection = ({ slice }) => {
  const { variation } = slice;
  const variationComponent = {
    default: (
      <div
        className="feedback-section-one position-relative p-30 mt-200 lg-mt-130 "
        data-aos="fade-up"
      >
        <div className="bg-wrapper position-relative pt-150 pb-180 lg-pt-100 lg-pb-120">
          <img
            src="/images/shape/shape_14.svg"
            alt="img"
            className="lazy-img shapes shape-one"
          />
          <div className="shapes shape-two" />
          <div className="shapes shape-three" />
          <Testimonial slice={slice} />
        </div>
        {/* /.bg-wrapper */}
      </div>
    ),
    servicesFeedback: (
      <div
        className="feedback-section-one zn2 position-relative"
        data-aos="fade-up"
      >
        <div className="bg-white zn2 position-relative pt-150 lg-pt-100">
          <div className="shapes shape-two" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 m-auto">
                <div className="title-style-one text-center">
                  <RichText
                    heading2={"main-title fw-bold tx-dark m0"}
                    field={slice.primary.title}
                  />
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
          </div>
          {/* /.container */}
          <ServiceTestimonial slice={slice} />
        </div>
        {/* /.bg-wrapper */}
      </div>
    ),
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {variationComponent[variation] || null}
    </section>
  );
};

export default FeedbackSection;
