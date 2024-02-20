import OurAim from "@/components/home-page/home-10/OurAim";

/**
 * @typedef {import("@prismicio/client").Content.FeatureTwoSectionSlice} FeatureTwoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureTwoSectionSlice>} FeatureTwoSectionProps
 * @param {FeatureTwoSectionProps}
 */
const FeatureTwoSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="fancy-feature-two position-relative pt-225 mt-40 lg-pt-100 sm-pt-60">
        <div className="container">
          <OurAim slice={slice} />
        </div>
        {/* /.container */}
      </div>
    </section>
  );
};

export default FeatureTwoSection;
