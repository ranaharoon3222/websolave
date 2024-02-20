import HeroSubscribe from "./HeroSubscribe";
import Illustration from "./Illustration";
import RichText from "@/components/prismic/RichText";
import { PrismicNextLink } from "@prismicio/next";

const Hero = ({ slice }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <RichText
            heading1={"hero-heading fw-bold tx-dark"}
            field={slice?.primary.title}
          />

          <RichText
            paragraphClassName={"text-lg mb-60 pt-50 pe-xl-5 lg-pt-30 lg-mb-40"}
            field={slice?.primary.sub_title}
          />

          <HeroSubscribe />

          <RichText
            paragraphClassName={"pr-info fw-500 fs-20 tx-dark mt-35"}
            field={slice?.primary.bottom_text}
            em={"fw-bold text-decoration-underline"}
          />
        </div>
      </div>
      {/* End .row */}

      <div className="card-one shapes bg-white">
        <div className="icon rounded-circle position-absolute fs-18 text-white">
          <i className="bi bi-check-lg" />
        </div>
        <RichText
          field={slice?.primary.card_one_text}
          heading6={"fw-500 tx-dark mb-15"}
        />
        <PrismicNextLink
          field={slice?.primary.card_one_link}
          className="more-btn tran3s text-uppercase fw-500 fs-13"
        >
          {slice?.primary.card_one_label}
        </PrismicNextLink>
      </div>
      {/* End card-one */}

      <Illustration slice={slice} />
      {/* /.illustration-holder */}
    </div>
  );
};

export default Hero;
