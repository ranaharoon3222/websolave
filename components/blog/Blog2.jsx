import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../prismic/RichText";

const Blog = ({ slice, currentPage, postsPerPage, all_blogs }) => {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const slicedData = all_blogs.slice(startIndex, endIndex);
  return (
    <>
      {slicedData.map((post, index) => (
        <div
          className="col-md-6"
          key={post.id}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <article className="blog-meta-three mb-60 lg-mb-40">
            <figure className="post-img m0">
              <Link href={`/blog/${post.uid}`} className="w-100 d-block h-auto">
                <PrismicNextImage
                  field={post.data.featured_image}
                  className="lazy-img w-100 tran4s h-auto"
                />
              </Link>
            </figure>
            <div className="post-data mt-30">
              <div className="post-date opacity-75 text-uppercase">
                {post.data.date}
              </div>
              <Link href={`/blog/${post.uid}`} className="mt-10 mb-15">
                <h4 className={"tran3s blog-title fw-normal tx-dark"}>
                  {post.data.title}
                </h4>
                <RichText field={post.data.summary} />
              </Link>
              <div>
                <Link
                  href={`/blog/${post.uid}`}
                  className="read-btn-two fw-500 tran3s"
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
          {/* /.blog-meta-three */}
        </div>
      ))}
    </>
  );
};

export default Blog;
