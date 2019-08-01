import React from "react";
import "./css/Header.css";

function Header(props) {
    console.log(props)
    return (
        <div className="score-bar">
            <div className="score">Score: {props.score}</div>
            <div id="win-lose">Correct!</div>
            <div className="high-score">High Score: {props.highscore}</div>
        </div>
    );
}

export default Header;