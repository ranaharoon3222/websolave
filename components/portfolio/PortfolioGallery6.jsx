import { useState } from "react";
import { Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import RichText from "../prismic/RichText";
import { PrismicNextImage } from "@prismicio/next";

const PortfolioGallery6 = ({ slice, all_projects }) => {
  const [filter, setFilter] = useState("*");
  // const filteredItems =
  //   filter === "*"
  //     ? slice.items
  //     : slice.items.filter((item) => item.category.includes(filter));
  const filteredItems =
    filter === "*"
      ? all_projects
      : all_projects.filter((item) =>
          item.data.project_category.includes(filter)
        );
  return (
    <div className="portfolio-gallery-seven pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          {slice.items.map((item) => (
            <li
              key={item.label}
              className={filter === item.filter_by ? "is-checked" : ""}
              onClick={() => setFilter(item.filter_by)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="row pt-90 lg-pt-50">
          {/* <Gallery> */}
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`col-lg-12 ${item.data.project_category}`}
            >
              <div className="portfolio-block-six mb-40">
                <div className="img-meta position-relative">
                  <PrismicNextImage
                    className="w-100 tran5s"
                    width={1320}
                    height={600}
                    field={item.data.projectslideimages[0].image}
                  />
                  <Item
                    original={item.data.projectslideimages[0].image.url}
                    thumbnail={item.data.projectslideimages[0].image.url}
                    width={1320}
                    height={600}
                  >
                    {({ ref, open }) => (
                      <Link href={`/portfolio/${item.uid}`}>
                        <span
                          role="button"
                          className="fancybox tran3s overlay-icon zoom-icon"
                          title="Click for large view"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus"></i>
                        </span>
                      </Link>
                    )}
                  </Item>
                  <div className="caption tran3s d-flex justify-content-end flex-column">
                    <RichText em={"tag"} field={item.data.project_tag} />
                    <Link href={`/portfolio/${item.uid}`}>
                      <h6 className="pj-title">
                        {item.uid
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())}
                      </h6>
                    </Link>
                  </div>
                  {/* <!-- /.caption --> */}
                </div>
              </div>
            </div>
          ))}
          {/* </Gallery> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery6;
