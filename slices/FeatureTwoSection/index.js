import AboutCeo from "@/components/about/AboutCeo";
import FancyBlock from "@/components/home-page/home-10/FancyBlock";
import OurAim from "@/components/home-page/home-10/OurAim";

/**
 * @typedef {import("@prismicio/client").Content.FeatureTwoSectionSlice} FeatureTwoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureTwoSectionSlice>} FeatureTwoSectionProps
 * @param {FeatureTwoSectionProps}
 */
const FeatureTwoSection = ({ slice }) => {
  const { variation } = slice;
  const variationComponent = {
    default: (
      <div className="fancy-feature-two position-relative pt-225 mt-40 lg-pt-100 sm-pt-60">
        <div className="container">
          <OurAim slice={slice} />
        </div>
        {/* /.container */}
      </div>
    ),
    featureTwoWithName: (
      <div className="fancy-feature-two position-relative pt-250 lg-pt-120">
        <div className="container">
          <FancyBlock slice={slice} />
        </div>
        {/* /.container */}
      </div>
    ),
    aboutFeatureOne: (
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <AboutCeo slice={slice} />
        </div>
        {/* /.container */}
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

export default FeatureTwoSection;
