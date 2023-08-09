import { isValid } from "../tools/Tools";
import { Helmet } from "react-helmet";
import { Loading } from "./Loading";
import { Error404 } from "./Error";
import { useState } from "react";
import Searchbox from "./Searchbox";
import GitLinks from "./GitLinks";
import Devinfo from "./Devinfo";
import Menu from "./Menu";
import Rff from "./rff";
import "../sass/style.sass";

function Home() {
  const [invalidUser, setInvalidUser] = useState(null);
  const [theme, setThemes] = useState("Light");
  const [dev, setDev] = useState(null);

  return (
    <>
      <Helmet>
        <title>{(dev && dev.login) || "Dev Finder"}</title>
        <meta
          name="description"
          content={
            (dev && dev.bio) ||
            "Find talented GitHub developers for your projects."
          }
        />
        <meta
          name="keywords"
          content={`GitHub, developer, finder, projects, coding, ${
            (dev && dev.name) || ""
          }, ${(dev && dev.login) || ""}`}
        />
      </Helmet>
      <div className={`root-child root-${theme}`}>
        <div className="main-div">
          <Menu setThemes={setThemes} />
          <Searchbox
            setApi={setDev}
            theme={theme}
            setInvalidUser={setInvalidUser}
          />
          {dev !== null && dev !== "Error" ? (
            <div className={`profile column ${theme}`}>
              <div className="row profile-img">
                <img src={dev.avatar_url} alt="profile imag" />
              </div>
              <div className="row profile-data">
                <Devinfo
                  theme={theme}
                  name={isValid(dev.name)}
                  joined={isValid(dev.created_at)}
                  loginid={"@" + isValid(dev.login)}
                  bio={isValid(dev.bio)}
                />
                <Rff
                  repo={isValid(dev.public_repos)}
                  follower={isValid(dev.followers)}
                  following={isValid(dev.following)}
                />
                <GitLinks
                  theme={theme}
                  location={isValid(dev.location)}
                  twitter={isValid(dev.twitter_username)}
                  blog={isValid(dev.blog)}
                  git={isValid(dev.login)}
                />
              </div>
            </div>
          ) : dev === "Error" ? (
            <div className={`profile column ${theme}`}>
              <Error404 name={invalidUser || ""} theme={theme} />
            </div>
          ) : (
            <div className={`profile column ${theme}`}>
              <Loading theme={theme} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
