import Testimonial from "@/components/home-page/home-10/Testimonial";

/**
 * @typedef {import("@prismicio/client").Content.FeedbackSectionSlice} FeedbackSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeedbackSectionSlice>} FeedbackSectionProps
 * @param {FeedbackSectionProps}
 */
const FeedbackSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
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
    </section>
  );
};

export default FeedbackSection;
