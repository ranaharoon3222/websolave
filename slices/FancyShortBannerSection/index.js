import CallToActions from "@/components/home-page/home-10/CallToActions";

/**
 * @typedef {import("@prismicio/client").Content.FancyShortBannerSectionSlice} FancyShortBannerSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FancyShortBannerSectionSlice>} FancyShortBannerSectionProps
 * @param {FancyShortBannerSectionProps}
 */
const FancyShortBannerSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CallToActions slice={slice} />
    </section>
  );
};

export default FancyShortBannerSection;
