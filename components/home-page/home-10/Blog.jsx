import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

const Blog = ({ slice, all_blogs }) => {
  return (
    <>
      {all_blogs.slice(0, 3).map((blog, index) => (
        <div
          key={index}
          className={`col-lg-4 col-sm-6 d-flex`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <article className="blog-meta-one tran3s mt-30">
            <figure className="post-img m0">
              <Link href={`/blog/${blog.uid}`} className="w-100 d-block">
                <PrismicNextImage
                  field={blog.data.featured_image}
                  className="lazy-img tran4s h-auto"
                />
              </Link>
            </figure>
            <div className="post-data mt-25">
              <a
                href={"#"}
                className="post-tag fw-500 tx-dark text-uppercase mb-20"
                style={{ backgroundColor: `${blog.data.category_bg}` }}
              >
                <p className="mb-0">{blog.data.category}</p>
              </a>
              <Link href={`/blog/${blog.uid}`} className="blog-title d-block">
                <h4 className="tran3s">{blog.data.title}</h4>
              </Link>
              <Link href={`/blog/${blog.uid}`} className="read-btn mt-35">
                <img
                  src="/images/icon/icon_12.svg"
                  alt="icon"
                  className="lazy-img"
                />
              </Link>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
