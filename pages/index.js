// import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import Header from '@/components/home-page/home-10/Header';
import Footer from '@/components/home-page/home-10/Footer';
// import Head from 'next/head';
// import { isFilled } from '@prismicio/client';

const Page = ({ navigation, page, footer, blogs }) => {
  // console.log(navigation);
  return (
    <>
      {/* <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name='description' content={page.data.meta_description} />
        ) : null}
      </Head> */}
      <Header navigation={navigation} />
      <SliceZone
        context={{ blogs: blogs }}
        slices={page.data.slices}
        components={components}
      />
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

export default Page;

export async function getServerSideProps({ params, previewData }) {
  const client = createClient({ previewData });
  // Fetching the required data directly
  const navigation = await client.getByUID('navigation', 'header');
  const footer = await client.getByUID('footer', 'footer');
  const page = await client.getByUID('pages', 'home');
  const blogs = await client.getAllByType('blog');
  return {
    props: {
      navigation,
      page,
      footer,
      blogs,
    },
  };
}
