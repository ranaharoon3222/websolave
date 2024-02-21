import Hero from "@/components/about/Hero";
import FancyBanner from "@/components/home-page/home-10/FancyBanner";

/**
 * @typedef {import("@prismicio/client").Content.WrapperSectionSlice} WrapperSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WrapperSectionSlice>} WrapperSectionProps
 * @param {WrapperSectionProps}
 */
const WrapperSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <FancyBanner slice={slice} />}
      {slice.variation === "heroBanner" && <Hero slice={slice} />}
    </section>
  );
};

export default WrapperSection;
