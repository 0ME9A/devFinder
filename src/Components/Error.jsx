import React from "react";
import '../sass/style.sass'

export const Error404 = (props) => {
    return (
        <>
            <div className="error">
                <p className={`${props.theme}-txt`}>Dev: <strong>"{props.name}"</strong> not found!!!</p>
                <h1 className={`${props.theme}-txt`}>Error 404</h1>
            </div>
        </>
    )
}