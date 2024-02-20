/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

import Hero from "@/components/home-page/home-10/Hero";

const HeroSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="hero-banner-one p-30">
        <div className="bg-wrapper" data-aos="fade">
          <Hero slice={slice} />
          {/* /.container */}

          <img
            src="/images/shape/shape_08.svg"
            alt="illustration"
            className="lazy-img shapes shape-eight"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
