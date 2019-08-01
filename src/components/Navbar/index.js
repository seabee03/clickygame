import React from "react";
import ".components/Navbar/style.css";

function Navbar() {
    return (
        <nav style={{backgroundColor: "green", display: "flex", justifyContent: "flex-end"}}className="navbar">
            <a href="/">Welcome</a>
        </nav>
    );
}

export default Navbar;