import Blog2 from "@/components/blog/Blog2";
import Pagination from "@/components/blog/Pagination";
import Blog from "@/components/home-page/home-10/Blog";
import FancyBlock2 from "@/components/home-page/home-10/FancyBlock2";
import Services from "@/components/home-page/home-10/Services";
import RichText from "@/components/prismic/RichText";
import Block2 from "@/components/services/Block2";
import Team5 from "@/components/team/Team5";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";
/**
 * @typedef {import("@prismicio/client").Content.ServiceBoxSlice} ServiceBoxSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceBoxSlice>} ServiceBoxProps
 * @param {ServiceBoxProps}
 */
const ServiceBox = ({ slice, context }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts to display per page
  const blogPosts = slice.items; // Array of your blog posts

  const { variation } = slice;
  const variationComponent = {
    default: (
      <div className="fancy-feature-one">
        <div className="mb-0">
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
    ),
    featuresWrapper: (
      <div className="wrapper pt-110 lg-pt-80">
        <div className="container">
          <div className="row justify-content-between">
            {slice.items.map((card, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={card.delay}
              >
                <FancyBlock2 slice={card} />
                {/* /.card-style-two */}
              </div>
            ))}
            {/* <FancyBlock2 slice={slice} /> */}
          </div>
        </div>
      </div>
    ),
    blogSectionOne: (
      <div className="blog-section-one p-30 mt-180 lg-mt-120">
        <div className="bg-wrapper pt-140 pb-170 lg-pt-100 lg-pb-100 position-relative">
          <div className="shapes shape-one" />
          <img
            src="/images/shape/shape_16.svg"
            alt="icon"
            className="lazy-img shapes shape-two"
          />
          <div className="shapes shape-three" />

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <div className="title-style-one text-center text-sm-start xs-mb-30">
                  <RichText
                    heading2={"main-title fw-bold tx-dark m0"}
                    field={slice.primary.title}
                  />
                </div>
                {/* /.title-style-one */}
              </div>
              <div className="col-lg-6 col-sm-5 ms-auto d-flex justify-content-center justify-content-sm-end">
                <PrismicNextLink
                  field={slice.primary.button_link}
                  className={"btn-one fw-500"}
                >
                  {slice.primary.button_label}
                </PrismicNextLink>
              </div>
            </div>
            {/* End .row */}

            <div className="row pt-50 lg-pt-30">
              <Blog slice={slice} all_blogs={context.blogs} />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
    ),
    aboutTeam: (
      <div className="team-section-four mt-150 lg-mt-90">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-md-7" data-aos="fade-right">
              <div className="title-style-one text-center text-md-start">
                <RichText
                  paragraphClassName={"sc-title text-uppercase"}
                  field={slice.primary.top_text}
                />
                <RichText
                  heading2={"main-title fw-bold tx-dark m0"}
                  field={slice.primary.title}
                />
              </div>{" "}
              {/* /.title-style-one */}
            </div>
            <div
              className="col-xxl-6 col-md-5 text-center text-md-end"
              data-aos="fade-left"
            >
              <PrismicNextLink
                field={slice.primary.button_link}
                className="btn-one fw-500 sm-mt-30"
              >
                {slice.primary.button_label}
              </PrismicNextLink>
            </div>
          </div>{" "}
          {/* /.row */}
          <div className="wrapper border-bottom pt-80 lg-pt-50">
            <div className="row gx-xxl-5">
              <Team5 slice={slice} />
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.container */}
      </div>
    ),
    servicesFeatures: (
      <div className="fancy-feature-one">
        <div className="container pt-120 lg-pt-80 md-pt-60">
          <div className="row gx-xxl-5">
            <Block2 slice={slice} />
          </div>
        </div>{" "}
        {/* /.container */}
      </div>
    ),
    blogPostSection: (
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-12">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <div className="row">
                    <Blog2
                      all_blogs={context.blogs}
                      slice={slice}
                      currentPage={currentPage}
                      postsPerPage={postsPerPage}
                    />
                  </div>
                </div>
                {/* /.blog-meta-wrapper */}
                {blogPosts.length > postsPerPage && (
                  <div className="page-pagination-one pt-15">
                    <Pagination
                      totalPosts={blogPosts.length}
                      postsPerPage={postsPerPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                )}
              </div>
              {/* End .col-lg-8 */}
            </div>
          </div>
        </div>
      </div>
    ),
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {variationComponent[variation] || null}
    </section>
  );
};

export default ServiceBox;
