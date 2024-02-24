import Link from "next/link";
import blogPosts from "../../data/blog";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../prismic/RichText";

const Blog = ({ slice, currentPage, postsPerPage }) => {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const slicedData = slice.items.slice(startIndex, endIndex);
  return (
    <>
      {slicedData.map((post, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={post.delay}
        >
          <article className="blog-meta-three mb-60 lg-mb-40">
            <figure className="post-img m0">
              <Link href={`/blog/${post.id}`} className="w-100 d-block h-auto">
                <PrismicNextImage
                  field={post.icon}
                  className="lazy-img w-100 tran4s h-auto"
                />
                {/* <Image
                  width={380}
                  height={280}
                  src={post.imageSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                /> */}
              </Link>
            </figure>
            <div className="post-data mt-30">
              <div className="post-date opacity-75 text-uppercase">
                {post.date}
              </div>
              <Link href={`/blog/${post.id}`} className="mt-10 mb-15">
                <RichText
                  heading4={"tran3s blog-title fw-normal tx-dark"}
                  field={post.title}
                />
              </Link>
              <div>
                <Link
                  href={`/blog/${post.id}`}
                  className="read-btn-two fw-500 tran3s"
                >
                  {post.button_label}
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
