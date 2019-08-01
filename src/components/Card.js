import React from "react";
import "./css/Card.css"

const Card = props => (
    <div className="card" onClick={() => { props.cardClick(props.id) }}>
        <img className="card-image" src={props.image} alt="tile"/>
    </div>
);

export default Card;
