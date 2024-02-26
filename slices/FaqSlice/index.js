/**
 * @typedef {import("@prismicio/client").Content.FaqSliceSlice} FaqSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSliceSlice>} FaqSliceProps
 * @param {FaqSliceProps}
 */
const FaqSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="col-xl-9 col-lg-10 m-auto pt-50 px-3 px-md-0">
        <div className="accordion accordion-style-two" id="accordionOne">
          {slice.items.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <div className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </div>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSlice;
