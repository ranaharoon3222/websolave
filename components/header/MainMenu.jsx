import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const MainMenu = ({ navigation }) => {
  const router = useRouter();

  const isActive = (link) => {
    if (!link || !link.url) return false; // Check if link or link.url is undefined/null

    // Normalize both URLs to remove any query parameters or trailing slashes
    const normalizedCurrentUrl = router.pathname.replace(/\/$/, "");
    const normalizedLink = link.url.replace(/\/$/, "");

    // Check if the normalized current URL matches the normalized link URL
    return normalizedCurrentUrl === normalizedLink;
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <div className="container-fluid">
        {/* <Link href="/" className="navbar-brand">
          <Image
            src="/images/logo/logo_01.png"
            alt="logo"
            width={95}
            height={30}
          />
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navigation.data.slices.map((slice) => (
              <li className="nav-item dropdown" key={slice.id}>
                <PrismicNextLink
                  className={`nav-link ${
                    slice.items.length > 0 ? "dropdown-toggle" : ""
                  } ${isActive(slice.primary.link) ? "active-menu" : ""}`}
                  role="button"
                  data-bs-toggle={slice.items.length > 0 ? "dropdown" : ""}
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                  field={slice.primary.link}
                >
                  <PrismicText field={slice.primary.name} />
                </PrismicNextLink>
                {slice.items.length > 0 && (
                  <ul className="dropdown-menu">
                    {slice.items.map((item) => (
                      <li key={JSON.stringify(item)}>
                        <PrismicNextLink
                          field={item.child_link}
                          className={`dropdown-item ${
                            isActive(item.child_link) ? "active" : ""
                          }`}
                        >
                          <PrismicText field={item.child_name} />
                        </PrismicNextLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
