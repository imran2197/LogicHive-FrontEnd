import React from 'react';
import "../styles/OurServices.css";

const OurServices = (props) => {
    return (
            <div className="card">
                <img src={props.item.imageSrc} alt="Figures" />
                <h2>{props.item.heading}</h2>
                <p>{props.item.para}</p>
            </div>
    )
}

export default OurServices;
