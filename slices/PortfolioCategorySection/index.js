import PortfolioGallery6 from "@/components/portfolio/PortfolioGallery6";

/**
 * @typedef {import("@prismicio/client").Content.PortfolioCategorySectionSlice} PortfolioCategorySectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioCategorySectionSlice>} PortfolioCategorySectionProps
 * @param {PortfolioCategorySectionProps}
 */
const PortfolioCategorySection = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PortfolioGallery6 slice={slice} all_projects={context.portfolio} />
    </section>
  );
};

export default PortfolioCategorySection;
