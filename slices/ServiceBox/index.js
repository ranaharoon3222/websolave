import Services from "@/components/home-page/home-10/Services";

/**
 * @typedef {import("@prismicio/client").Content.ServiceBoxSlice} ServiceBoxSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceBoxSlice>} ServiceBoxProps
 * @param {ServiceBoxProps}
 */
const ServiceBox = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="fancy-feature-one">
        <div className="container">
          <div className="inner-content pt-110 lg-pt-60 md-pt-30">
            <div className="row gx-xxl-5">
              {slice.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`col-lg-3 col-sm-6`}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <Services item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBox;
