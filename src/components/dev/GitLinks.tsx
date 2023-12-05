import { FiTwitter, FiGithub, FiGlobe } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { isValidUrl } from "@/utils/basic";
import { devFace } from "@/types/devFace";

import Link from "next/link";

interface gitLinksFace {
  dev: devFace;
}

const GitLinks = ({ dev }: gitLinksFace) => {
  const links = [
    {
      name: "Location",
      url: dev.location,
      isUrl: false,
      icon: <MdLocationOn />,
      hide: false,
    },
    {
      name: "Twitter",
      url: dev.twitter_username
        ? `https://twitter.com/${dev.twitter_username}`
        : "",
      isUrl: true,
      icon: <FiTwitter />,
      hide: !dev.twitter_username,
    },
    {
      name: "GitHub",
      url: `https://github.com/${dev.login}`,
      isUrl: true,
      icon: <FiGithub />,
      hide: false,
    },
    {
      name: "Website",
      url: dev.blog,
      isUrl: true,
      icon: <FiGlobe />,
      hide: !isValidUrl(dev.blog),
    },
  ];

  return (
    <ul className="flex flex-wrap">
      {links.map(
        (item) =>
          !item.hide && (
            <li
              className="text-sm p-2 pr-8 w-[50%] overflow-hidden"
              key={item.name}
            >
              {item.isUrl ? (
                <Link
                  href={item.url}
                  target="_blank"
                  className="flex gap-3 items-center hover:underline w-fit"
                >
                  {item.icon} {item.name}
                </Link>
              ) : (
                <p className="flex items-center gap-3 whitespace-nowrap">
                  <span>{item.icon}</span>
                  {item.url || "N/A"}
                </p>
              )}
            </li>
          )
      )}
    </ul>
  );
};

export default GitLinks;
