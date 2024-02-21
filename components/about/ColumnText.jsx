import React from "react";
import RichText from "../prismic/RichText";

const ColumnText = ({ slice }) => {
  return (
    <>
      <div className="title-style-one mt-30">
        <RichText
          paragraphClassName="sc-title text-uppercase"
          field={slice.primary.top_text}
        />
        <RichText
          heading2={"main-title fw-bold tx-dark"}
          field={slice.primary.title}
        />
      </div>
      <RichText
        paragraphClassName={"text-lg mt-40 lg-mt-20"}
        field={slice.primary.sub_title}
      />
    </>
  );
};

export default ColumnText;
