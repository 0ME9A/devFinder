import React from "react";
import { ToDateStr } from "../tools/Tools";


const Devinfo = (props) => {
    return (
        <>
            <div className="column name-j-d">
                <h1 className={`${props.theme}-txt`}>{props.name}</h1>
                <span className="join-data">{ToDateStr(props.joined)}</span>
            </div>
            <div className="column userid">
                <span>{props.loginid}</span>
            </div>
            <div className="column bio">
                <p className={`${props.theme}-txt`}>{props.bio}</p>
            </div>
        </>
    )
}

export default Devinfo