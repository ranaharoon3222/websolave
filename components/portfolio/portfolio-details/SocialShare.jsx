const SocialShare = ({ socialMedia }) => {
  return (
    <ul className="style-none social-icon circle-shape d-flex pt-10">
      {socialMedia.social_share.map((platform) => (
        <li
          key={platform.name}
          className="rounded-circle d-flex align-items-center justify-content-center"
        >
          <a href={platform.url}>
            <i className={platform.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialShare;
