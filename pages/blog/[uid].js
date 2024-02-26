import Seo from '../../components/common/Seo';
import Tag from '../../components/blog/blog-details/Tag';
import SocialShare from '../../components/blog/blog-details/SocialShare';
import Header from '@/components/home-page/home-10/Header';
import Footer from '@/components/home-page/home-10/Footer';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../../prismicio';
import { components } from '../../slices/index';
import RichText from '@/components/prismic/RichText';
import { PrismicNextImage } from '@prismicio/next';

const DynamicBlogDetails = ({ navigation, footer, blog }) => {
  const { data } = blog;

  return (
    <>
      <Seo pageTitle='Dynami Blog Details' />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header navigation={navigation} />

      {/* 
			=============================================
			Feature Section Fifty One
			============================================== 
			*/}
      <div className='fancy-feature-fiftyOne position-relative mt-250 lg-mt-200'>
        <div className='container'>
          <div className='row'>
            <div className='col-xxl-8 col-lg-9' data-aos='fade-right'>
              <p className='blog-pubish-date'>
                Digital Marketing . 2 July . By
                <a href='#' className='fw-500'>
                  {data.author}
                </a>
              </p>
              <h2 className='blog-heading-one tx-dark'>{data?.title}</h2>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src='/images/shape/shape_172.svg'
          alt='shape'
          className='lazy-img shapes shape-two'
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className='blog-details-one mt-80 lg-mt-60'>
        <div className='container'>
          <div className='border-bottom pb-130 lg-pb-60'>
            <div className='row gx-xl-5'>
              <div className='col-lg-8'>
                <div className='blog-meta-wrapper pe-xxl-5'>
                  <article className='blog-details-content'>
                    <PrismicNextImage
                      className='lazy-img image-meta w-100 h-auto'
                      field={data.featured_image}
                    />

                    <RichText field={data.description} />
                    <div className='bottom-widget d-sm-flex align-items-center justify-content-between'>
                      <Tag />
                      <SocialShare />
                    </div>
                    {/* /.bottom-widget */}
                  </article>
                  {/* /.blog-details-content */}
                </div>
              </div>
              {/* End .col-lg-8 */}
            </div>
          </div>
        </div>
      </div>

      <SliceZone slices={data.slices} components={components} />

      {/* 
        =============================================
        Footer 
        ============================================== 
        */}
      <div className='footer-style-one theme-basic-footer position-relative'>
        <div className='shapes shape-one' />
        <div className='container'>
          <div className='inner-wrapper'>
            <Footer footer={footer} />
            <div className='bottom-footer'>
              <p className='copyright text-center m0'>
                © {new Date().getFullYear()}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://websolave.com'
                  className='ml-5'
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

export default DynamicBlogDetails;

export async function getServerSideProps({ params, previewData }) {
  const client = createClient({ previewData });
  // Fetching the required data directly
  const { uid } = params;
  const navigation = await client.getByUID('navigation', 'header');
  const footer = await client.getByUID('footer', 'footer');
  const blog = await client.getByUID('blog', uid);
  return {
    props: {
      navigation,
      footer,
      blog,
    },
  };
}
