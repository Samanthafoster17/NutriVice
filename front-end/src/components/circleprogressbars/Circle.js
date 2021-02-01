import React, { useState } from 'react'

import CircleProgress from "@material-ui/core/CircularProgress";

import "./Circle.css"
export default function Circle() {

    const [progress, setProgress] = useState(79);

    return (
        <div className = "circle">
            <CircleProgress  style = {{color: "#084343", height: "100px", width: "100px"}} color = "secondary" variant = "determinate" value = {progress}/>

        </div>
    )
}
