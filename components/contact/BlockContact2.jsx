import { PrismicNextImage } from "@prismicio/next";
import RichText from "../prismic/RichText";

const BlockContact2 = ({ slice }) => {
  return (
    <>
      {slice.items.map((block, index) => (
        <div className="address-block-three d-flex mb-70 lg-mb-40" key={index}>
          <div className="icon">
            <PrismicNextImage field={block.icon} />
          </div>
          <div className="text">
            <RichText heading5={"title"} field={block.title} />
            <RichText hyperlink={"call webaddress"} field={block.content} />
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact2;
