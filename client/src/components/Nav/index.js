import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { Button } from "../Button"

import "./style.css";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 680 || click) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                        <i className="fas fa-heartbeat"></i> Nutri<span className = "highlight">Vice</span>
                    </Link>
                    <div className = "menu-icon" onClick = {handleClick}>
                        <i className = {click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className = {click ? "nav-menu active" : "nav-menu"}>
                        <li className = "nav-item">
                            <Link to = "/" className = "nav-links tile" onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/contact" className = "nav-links tile" onClick = {closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/Signup" className = "nav-links tile" onClick = {closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        {click &&
                        <li className = "nav-item">
                            <Button buttonStyle = "btn--outline" to = "signin" onClick = {closeMobileMenu}>SIGN IN</Button>
                        </li>}
                    </ul>
                    {button && <Button buttonStyle = "btn--outline" to = "signin">SIGN IN</Button>}
                </div>
            </nav>
        </>
    )
}