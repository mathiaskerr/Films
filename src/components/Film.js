import React, {useState} from "react";

const Film = ({film, url}) => {

    return(
        <div>
            <li><a href={url}>{film}</a></li>
        </div>
    )
};

export default Film;