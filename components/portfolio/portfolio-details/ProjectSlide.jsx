import { PrismicNextImage } from "@prismicio/next";

const ProjectSlide = ({ slide, images }) => {
  return (
    <div
      id="gallery-carousel"
      className="carousel slide me-xxl-5 md-mb-40"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.projectslideimages.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <PrismicNextImage
              field={img.image}
              className="d-block w-100 h-auto"
            />
          </div>
        ))}
      </div>
      {/* End carousel-inner */}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#gallery-carousel"
        data-bs-slide="prev"
      >
        <i className="bi bi-chevron-left"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      {/* End prev */}

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#gallery-carousel"
        data-bs-slide="next"
      >
        <i className="bi bi-chevron-right"></i>
        <span className="visually-hidden">Next</span>
      </button>
      {/* End next */}
    </div>
  );
};

export default ProjectSlide;
