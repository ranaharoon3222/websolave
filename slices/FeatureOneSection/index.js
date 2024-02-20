import FeatureOne from "@/components/home-page/home-10/FeatureOne";

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
      <div className="fancy-feature-one pt-170 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <FeatureOne slice={slice} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOneSection;
