import { isAvailableSocial } from "../tools/Tools";
import { IoLogoTwitter } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { DiGithubAlt } from "react-icons/di";
import { HiLink } from "react-icons/hi";

const GitLinks = (props) => {
  return (
    <div className="column git-links">
      <div className="cell location">
        <span className="icon">
          <MdLocationOn className={`icon-tag ${props.theme}-txt`} />
        </span>
        <span className={`location-name ${props.theme}-txt`}>
          {props.location}
        </span>
      </div>
      <div className="cell">
        <span className="icon">
          <IoLogoTwitter className={`icon-tag ${props.theme}-txt`} />
        </span>
        {isAvailableSocial(
          props.twitter,
          `https://twitter.com/${props.twitter}`,
          "Twitter",
          props.theme
        )}
      </div>
      <div className="cell">
        <span className="icon">
          <HiLink className={`icon-tag ${props.theme}-txt`} />
        </span>
        {isAvailableSocial(props.blog, props.blog, "Website", props.theme)}
      </div>
      <div className="cell">
        <span className="icon">
          <DiGithubAlt className={`icon-tag ${props.theme}-txt`} />
        </span>
        {isAvailableSocial(
          props.blog,
          `https://github.com/${props.git}`,
          "Github",
          props.theme
        )}
      </div>
    </div>
  );
};

export default GitLinks;
