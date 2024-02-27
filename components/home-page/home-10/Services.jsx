import RichText from "@/components/prismic/RichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Services = ({ item }) => {
  return (
    <>
      <div className="card-style-one pe-xxl-5 position-relative mt-40">
        <div
          className="icon d-flex align-items-center justify-content-center"
          style={{ backgroundColor: item.background_color }}
        >
          <PrismicNextImage
            field={item.icon}
            sizes="100vw"
            className="lazy-img"
          />
        </div>
        <RichText
          heading5={"fw-500 mt-35 mb-25 tran3s tx-dark"}
          field={item.title}
          // hyperlink={"tran3s tx-dark"}
        />

        <RichText paragraphClassName="mb-25" field={item.description} />
        {/* <PrismicNextLink field={item.link}>
          <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
        </PrismicNextLink> */}
      </div>
    </>
  );
};

export default Services;
