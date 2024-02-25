import RichText from "@/components/prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const FancyBlock2 = ({ slice }) => {
  return (
    <>
      <div className="card-style-two mt-40">
        <div className="icon d-flex align-items-end">
          <PrismicNextImage field={slice.icon} />
        </div>
        <RichText
          em={"d-inline-block text-uppercase fs-14 opacity-75 mt-15 mb-10"}
          field={slice.title}
        />

        <RichText heading4={"fw-500 m0"} field={slice.description} />
      </div>
      {/* /.card-style-two */}
    </>
  );
};

export default FancyBlock2;
