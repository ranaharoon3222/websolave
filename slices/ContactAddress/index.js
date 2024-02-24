import BlockContact2 from "@/components/contact/BlockContact2";
import ContactForm2 from "@/components/contact/ContactForm2";
import RichText from "@/components/prismic/RichText";

/**
 * @typedef {import("@prismicio/client").Content.ContactAddressSlice} ContactAddressSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactAddressSlice>} ContactAddressProps
 * @param {ContactAddressProps}
 */
const ContactAddress = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <RichText
                heading2={"main-title tx-dark fw-bold"}
                field={slice.primary.title}
              />
            </div>
            <RichText
              paragraphClassName={"fs-20 mt-30 lg-mt-20"}
              field={slice.primary.sub_title}
            />
          </div>
          {/* End container */}

          <div className="container">
            <div className="contact-section-two text-start mt-80 lg-mt-60">
              <div className="row">
                <div className="col-lg-7">
                  <div
                    className="form-style-three md-mb-60"
                    data-aos="fade-right"
                  >
                    <ContactForm2 />
                  </div>
                  {/* /.form-style-three */}
                </div>
                {/* End col-lg-7 */}

                <div
                  className="col-xl-4 col-lg-5  ms-auto"
                  data-aos="fade-left"
                >
                  <BlockContact2 slice={slice} />
                </div>
                {/* End col-xl-4 */}
              </div>
            </div>
            {/* /.contact-section-two */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
    </section>
  );
};

export default ContactAddress;
