import React from 'react'

import { Button } from "./Button"

import "./Jumbotron.css"

function Jumbotron() {
    return (
        <div className = "jumbotron-container">
            <h1>Welcome!</h1>
            <p>NutriVice is a meal planner that's all about you!</p>
            <div className = "jumbotron-btns">
                <Button className = "btns" buttonStyle = "button--outline" buttonSize = "btn--large" >Get Started!</Button>
            </div>
        </div>
    )
}

export default Jumbotron;