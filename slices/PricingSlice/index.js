import RichText from "@/components/prismic/RichText";
import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.PricingSliceSlice} PricingSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PricingSliceSlice>} PricingSliceProps
 * @param {PricingSliceProps}
 */
const PricingSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container pricing-table-area-four pt-60 lg-pt-30">
        <div className="row">
          {slice.items.map((pricing, index) => (
            <div key={index} className={`col-lg-4 col-md-6 d-flex`}>
              <div
                className="pr-table-wrapper mt-40 flex-fill"
                data-aos="fade-up"
                data-aos-delay={`0.${index + 1}s`}
              >
                <div className="pack-name fw-500 tx-dark">{pricing.name}</div>

                <RichText
                  paragraphClassName="pack-details fs-14"
                  field={pricing.details}
                />

                <div
                  className="top-banner align-items-center d-md-flex"
                  style={{ background: pricing.background }}
                >
                  <div className="price fw-500">
                    <sup>$</sup>
                    {pricing.price}
                    <sub>/monthly</sub>
                  </div>
                  {/* <div>
                    <span>{pricing.monthly_text}</span>
                    <em className="d-block">{pricing.renewal_text}</em>
                  </div> */}
                </div>
                <RichText
                  field={pricing.pricing_features}
                  list={"pr-feature style-none flex-fill"}
                />
                {index === 1 ? (
                  <PrismicNextLink
                    field={pricing.button_link}
                    className="btn-two fw-500 tran3s w-100"
                  >
                    {pricing.button_label}
                  </PrismicNextLink>
                ) : (
                  <PrismicNextLink
                    field={pricing.button_link}
                    className="trial-button"
                  >
                    {pricing.button_label}
                  </PrismicNextLink>
                )}
                <div className="trial-text pt-25 tx-dark">
                  {pricing.trial_text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div
          className="text-center mt-70 lg-mt-40 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="d-inline-block px-3 py-2 bg-light consult-text fs-18 fw-500 tx-dark">
            {slice.primary.consult_text}
            <PrismicNextLink
              field={slice.primary.consult_link}
              className="fw-normal text-decoration-underline"
            >
              {slice.primary.consult_label}
            </PrismicNextLink>
          </div>
          <RichText field={slice.primary.faq_title} heading2={"fw-700 mt-30"} />
        </div>
      </div>
    </section>
  );
};

export default PricingSlice;
