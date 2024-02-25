import Hero from "@/components/about/Hero";
import FancyBanner from "@/components/home-page/home-10/FancyBanner";

/**
 * @typedef {import("@prismicio/client").Content.WrapperSectionSlice} WrapperSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WrapperSectionSlice>} WrapperSectionProps
 * @param {WrapperSectionProps}
 */
const WrapperSection = ({ slice }) => {
  const { variation } = slice;
  const variationComponent = {
    default: <FancyBanner slice={slice} />,
    heroBanner: <Hero slice={slice} />,
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

export default WrapperSection;
