import React from "react";
import logo from "../../assets/graphics/logo.png"
import "./styles.scss"

const Header = (props) => {
    return <header data-test="headerComponent">
        <div className="wrapper">
            <div className="logo">
                <img data-test="logoimage" src={logo} alt ="logo" />
            </div>
        </div>
    </header>
}

export default Header;