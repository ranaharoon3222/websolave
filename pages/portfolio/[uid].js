import Seo from "../../components/common/Seo";
import SocialShare from "../../components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "../../components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "../../components/portfolio/portfolio-details/ProjectSlide";
import PortfolioGallery from "../../components/portfolio/portfolio-details/PortfolioGallery";
import { createClient } from "prismicio";
import Header from "@/components/home-page/home-10/Header";
import Footer from "@/components/home-page/home-10/Footer";
import { SliceZone } from "@prismicio/react";
import { components } from "slices";
import RichText from "@/components/prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const DynamicPortfolioDetails = ({ navigation, portfolio, footer }) => {
  const { data } = portfolio;
  return (
    <>
      <Seo pageTitle="Portfolio Details" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header navigation={navigation} />
      {/* HERO SECTION */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-6" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-20">
                <RichText
                  paragraphClassName="sc-title-two fst-italic position-relative"
                  field={data.hero_top_text}
                />
                <RichText
                  heading2="main-title fw-500 tx-dark"
                  field={data.hero_title}
                />
              </div>
            </div>
          </div>
        </div>
        <PrismicNextImage
          field={data.hero_image}
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>
      {/* 
			=============================================
				Portfolio Details Two
			============================================== 
			*/}
      <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">
                <ProjectSlide slide={portfolio} images={data} />
                {/* /#gallery-carousel */}
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5">
                  <RichText heading3={"mb-20"} field={data.sidebar_title} />
                  <RichText
                    paragraphClassName={"border-bottom pb-40 mb-35 lg-pb-0"}
                    field={data.sidebar_description}
                  />

                  <div className="row">
                    <ProjectDetails details={data} />
                  </div>
                  {/* End .row */}

                  <SocialShare socialMedia={data} />
                </div>
              </div>
              {/* End col-lg-4 */}
            </div>
            {/* End .row */}

            <div className="col-xl-9  mt-120 lg-mt-80">
              <div
                className="title-style-twelve mb-45 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  {data.top_text}
                </div>
                <RichText field={data.description} />
              </div>
              {/* /.title-style-twelve */}

              <div className="row">
                <PortfolioGallery images={data} />
              </div>

              <div
                className="title-style-twelve mb-45 mt-120 lg-mb-30 lg-mt-80"
                data-aos="fade-up"
              >
                <RichText
                  paragraphClassName={
                    "sc-title fst-italic position-relative mb-0"
                  }
                  field={data.final_top_text}
                />
                <RichText
                  heading2={"main-title fw-500 tx-dark"}
                  field={data.final_title}
                />
              </div>
              {/* /.title-style-twelve */}
              <RichText field={data.final_description} />
            </div>
            {/* End col-xl-9 */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
      {/* /.project-details */}

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      {/* <CallToAction /> */}
      <SliceZone slices={data.slices} components={components} />
      {/* 
        =============================================
        Footer 
        ============================================== 
        */}
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer footer={footer} />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://websolave.com"
                  className="ml-5"
                >
                  websolave. All rights reserved
                </a>
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
    </>
  );
};

export default DynamicPortfolioDetails;

export async function getServerSideProps({ params, previewData }) {
  const client = createClient({ previewData });
  // Fetching the required data directly
  const { uid } = params;
  const navigation = await client.getByUID("navigation", "header");
  const footer = await client.getByUID("footer", "footer");
  const portfolio = await client.getByUID("portfolio", uid);
  return {
    props: {
      navigation,
      footer,
      portfolio,
    },
  };
}
