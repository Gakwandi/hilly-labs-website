import React from "react";
import "../css/style.css";
import logo from "../images/bg/Logo1.png";

export default  function index() {
    return (
        <div class="container">
            <div class="content">
                {/* <h1>Our website is almost ready</h1> */}
                <img src={logo} alt="Hilly Labs"/>
                <h1>Coming <span>Soon</span></h1>
                <br/>
                <p>Our website is currently undergoing scheduled maintenance.</p>
                <p>We should be back shortly. Thank you for your patience</p>
            </div>
            
        </div>
    )
}
