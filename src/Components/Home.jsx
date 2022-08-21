import React, { useState } from "react";
import Searchbox from "./Searchbox";
import GitLinks from "./GitLinks";
import Devinfo from "./Devinfo";
import Menu from "./Menu";
import Rff from "./rff";
import { Error404 } from "./Error";
import { Loading } from "./Loading";
import { isValid } from "../tools/Tools";
import '../sass/style.sass'


function Home() {
    const [api, setApi] = useState('')
    const [theme, setThemes] = useState('Light')

    let d = ''
    if (api.status === 200) {
        d = api.data
    }

    return (
        <>
            <div className={`root-child root-${theme}`}>
                <div className="main-div">
                    <Menu setThemes={setThemes}/>
                    <Searchbox setApi={setApi} theme={theme} />

                    {(() => {
                        if (api.status === 200) {
                            return (
                                <div className={`profile column ${theme}`}>
                                    <div className="row profile-img">
                                        <img src={d.avatar_url} alt="profile imag" />
                                    </div>
                                    <div className="row profile-data">
                                        <Devinfo
                                            theme={theme}
                                            name={isValid(d.name)}
                                            joined={isValid(d.created_at)}
                                            loginid={'@'+isValid(d.login)}
                                            bio={isValid(d.bio)}
                                        />
                                        <Rff
                                            repo={isValid(d.public_repos)}
                                            follower={isValid(d.followers)}
                                            following={isValid(d.following)}
                                        />
                                        <GitLinks
                                            theme={theme}
                                            location={isValid(d.location)}
                                            twitter={isValid(d.twitter_username)}
                                            blog={isValid(d.blog)}
                                            git={isValid(d.login)}
                                        />
                                    </div>
                                </div>)

                        } else if (api.code === 'ERR_BAD_REQUEST') {
                            const searchText = (api.config.url).replace('https://api.github.com/users/', '')
                            return (
                                <div className={`profile column ${theme}`}>
                                    <Error404 name={searchText.trim()} theme={theme} />
                                </div>
                            )

                        } else {
                            return (
                                <div className={`profile column ${theme}`}>
                                    <Loading theme={theme} />
                                </div>
                            )
                        }
                    })()}
                    
                </div>
            </div>
        </>
    )

}

export default Home