import Link from "next/link";
import Form from "./Form";
import RichText from "@/components/prismic/RichText";

const CallToActions = ({ slice }) => {
  return (
    <div className="fancy-short-banner-one mt-170 lg-mt-120">
      <div className="container">
        <div className="bg-wrapper position-relative" data-aos="fade-up">
          <div className="shapes shape-one" />
          <div className="inner-wrapper">
            <div className="subscribe-area">
              <div className="row align-items-end">
                <div className="col-lg-6">
                  <div className="title-style-two">
                    <RichText
                      paragraphClassName="sc-title fw-500 mb-0"
                      field={slice.primary.top_text}
                    />
                    <RichText
                      heading4="main-title fw-bold tx-dark"
                      field={slice.primary.title}
                    />
                  </div>
                  {/* /.title-style-two */}
                </div>
                {/* End .col */}

                <div className="col-lg-6">
                  <div className="subscribe-form">
                    <Form />
                    <p className="m0 pt-10">
                      Already a member?{" "}
                      <Link href="/login" className="tx-dark">
                        Sign in.
                      </Link>
                    </p>
                  </div>
                  {/* /.subscribe-form */}
                </div>
              </div>
            </div>
            {/* /.subscribe-area */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
    </div>
  );
};

export default CallToActions;
