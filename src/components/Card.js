import React from "react";
//import img from "../images/katie-zaferes.png";
//import img1 from "../images/star.png";

export default function Card(props) {

    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--img" />
            <div className="card--stats" >
                <img src={`../images/star.png`} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) • </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span></p>
        </div>
    )
}