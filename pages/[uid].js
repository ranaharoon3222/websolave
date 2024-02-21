// import * as prismicH from '@prismicio/helpers';
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices/index";
import Header from "@/components/home-page/home-10/Header";
import Footer from "@/components/home-page/home-10/Footer";
// import Head from 'next/head';
// import { isFilled } from '@prismicio/client';

const Page = ({ page }) => {
  return (
    <>
      {/* <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name='description' content={page.data.meta_description} />
        ) : null}
      </Head> */}
      <Header />
      <SliceZone slices={page.data.slices} components={components} />
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/ib-themes"
                >
                  ib-themes
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
  const page = await client.getByUID("pages", params.uid);
  //   const settings = await client.getByUID('settings', 'settings');
  return {
    props: {
      page,
    },
  };
}
