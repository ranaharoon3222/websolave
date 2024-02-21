import React from "react";
import RichText from "../prismic/RichText";

const faqData = [
  {
    id: 1,
    question: "Google ads setup & management",
    answer:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
  {
    id: 2,
    question: "Web Design & Development",
    answer:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
  {
    id: 3,
    question: "Reputation management",
    answer:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
  // Add more FAQ items as needed
];

const Faq4 = ({ slice }) => {
  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {slice.items.map((faq) => (
        <div className="accordion-item" key={faq.faq_id}>
          <div className="accordion-header" id={`heading${faq.faq_id}`}>
            <button
              className={`accordion-button ${faq.faq_id === 1 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${faq.faq_id}`}
              aria-expanded={faq.faq_id === 1 ? "true" : "false"}
              aria-controls={`collapse${faq.faq_id}`}
            >
              <RichText field={faq.question} />
            </button>
          </div>
          <div
            id={`collapse${faq.faq_id}`}
            className={`accordion-collapse collapse ${
              faq.faq_id === 1 ? "show" : ""
            }`}
            aria-labelledby={`heading${faq.faq_id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              {/* <p>{faq.answer}</p> */}
              <RichText field={faq.answer} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq4;
