import { useState } from "react";
import items from "../../data/portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import Image from "next/image";
import RichText from "../prismic/RichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const PortfolioGallery6 = ({ slice }) => {
  const [filter, setFilter] = useState("*");

  // const filteredItems =
  //   filter === "*"
  //     ? items.slice(40, 45)
  //     : items.slice(40, 45).filter((item) => item.category.includes(filter));
  const filteredItems =
    filter === "*"
      ? slice.items
      : slice.items.filter((item) => item.category.includes(filter));
  return (
    <div className="portfolio-gallery-seven pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={filter === "shopify" ? "is-checked" : ""}
            onClick={() => setFilter("shopify")}
          >
            Shopify
          </li>
          <li
            className={filter === "wordpress" ? "is-checked" : ""}
            onClick={() => setFilter("wordpress")}
          >
            Wordpress
          </li>
          <li
            className={filter === "react" ? "is-checked" : ""}
            onClick={() => setFilter("react")}
          >
            React
          </li>
        </ul>

        <div className="row pt-90 lg-pt-50">
          {/* <Gallery> */}
          {filteredItems.map((item, index) => (
            <div key={index} className={`col-lg-12 ${item.category}`}>
              <div className="portfolio-block-six mb-40">
                <div className="img-meta position-relative">
                  <PrismicNextImage
                    className="w-100 tran5s"
                    width={1320}
                    height={600}
                    field={item.image}
                  />
                  <Item
                    original={item.image.url}
                    thumbnail={item.image.url}
                    width={1320}
                    height={600}
                  >
                    {({ ref, open }) => (
                      <span
                        role="button"
                        className="fancybox tran3s overlay-icon zoom-icon"
                        title="Click for large view"
                        ref={ref}
                        onClick={open}
                      >
                        <i className="bi bi-plus"></i>
                      </span>
                    )}
                  </Item>
                  <div className="caption tran3s d-flex justify-content-end flex-column">
                    <RichText em={"tag"} field={item.tag} />
                    <h6>
                      <PrismicNextLink
                        href={`/portfolio/${item.id}`}
                        className="pj-title"
                      >
                        <RichText field={item.name} />
                      </PrismicNextLink>
                    </h6>
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
