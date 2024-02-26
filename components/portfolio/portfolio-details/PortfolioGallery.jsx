import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { PrismicNextImage } from "@prismicio/next";

const PortfolioGallery = ({ images }) => {
  return (
    <>
      <Gallery>
        {images.gallery.map((img, index) => (
          <div
            className={`col-12 ${index === 2 ? "" : "col-sm-6"}`}
            key={index}
          >
            <div className="img-meta mt-30 h-auto" data-aos="fade-right">
              <Item width={img.width} height={img.height}>
                {({ ref, open }) => (
                  <span
                    role="button"
                    className="fancybox d-block"
                    title="Click for large view"
                    ref={ref}
                    onClick={open}
                  >
                    <PrismicNextImage
                      field={img.imagesrc}
                      alt={img.alt}
                      className="lazy-img w-100"
                      width={img.width}
                      height={img.height}
                    />
                    {/* <Image
                      width={460}
                      height={400}
                      layout="responsive"
                      src={img.imagesrc}
                      alt={img.alt}
                      className="lazy-img w-100"
                    /> */}
                  </span>
                )}
              </Item>
            </div>
          </div>
        ))}
      </Gallery>
    </>
  );
};

export default PortfolioGallery;
