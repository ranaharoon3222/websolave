import FeatureOne from "@/components/home-page/home-10/FeatureOne";
import RichText from "@/components/prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.FeatureOneSectionSlice} FeatureOneSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureOneSectionSlice>} FeatureOneSectionProps
 * @param {FeatureOneSectionProps}
 */
const FeatureOneSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <div className="fancy-feature-one pt-170 lg-pt-140">
          <div className="container">
            <div className="row align-items-center">
              <FeatureOne slice={slice} />
            </div>
          </div>
        </div>
      )}
      {slice.variation === "testimonialHero" && (
        <div className="fancy-feature-fiftyOne position-relative mt-200">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-md-6" data-aos="fade-right">
                <div className="title-style-five mb-65 lg-mb-20">
                  <RichText
                    paragraphClassName="sc-title-two fst-italic position-relative"
                    field={slice.primary.top_text}
                  />
                  <RichText
                    heading2="main-title fw-500 tx-dark"
                    field={slice.primary.title}
                  />
                </div>
              </div>
            </div>
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="lazy-img shapes shape-two"
          />
        </div>
      )}
      {slice.variation === "faqsHero" && (
        <div className="fancy-feature-fiftyOne position-relative mt-200">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
                <div className="title-style-five">
                  <RichText
                    paragraphClassName="sc-title-two fst-italic position-relative d-inline-block"
                    field={slice.primary.top_text}
                  />
                  <RichText
                    heading2="main-title fw-500 tx-dark"
                    field={slice.primary.title}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      )}
    </section>
  );
};

export default FeatureOneSection;
