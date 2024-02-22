import { PrismicNextLink } from "@prismicio/next";

// const socialIcons = [
//   {
//     iconClass: "fab fa-facebook-f",
//     link: "#",
//   },
//   {
//     iconClass: "fab fa-twitter",
//     link: "#",
//   },
//   {
//     iconClass: "fab fa-linkedin-in",
//     link: "#",
//   },
// ];

const Social = ({ socialIcons }) => {
  return (
    <ul className="d-flex social-icon style-none">
      {socialIcons.data.social_links.map((icon, index) => (
        <li key={index}>
          <PrismicNextLink
            target="_blank"
            field={icon.icon_link}
            rel="noopener noreferrer"
          >
            <i className={icon.icon_source} />
          </PrismicNextLink>
        </li>
      ))}
    </ul>
  );
};

export default Social;
