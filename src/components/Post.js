import React from "react";
import "./Post.css";

export default function Post(props) {
  return (
    <div className="post">
      <div className="post__image">
        <img src={`../images/${props.item.imageSrc}`} alt="" />
      </div>
      <div className="post_descriptions">
        <div className="post__description--location">
          <i className="fa-solid fa-location-dot"></i>
          <span className="post__description--location__country">
            {props.item.location}
          </span>
          <a
            href={props.item.googleMapsUrl}
            className="post__description--location__maps"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <div className="post__description--objective">{props.item.title}</div>
        <div className="post__description--date">
          {props.item.startDate} - {props.item.endDate}
        </div>
        <p className="post__description--prop">{props.item.description}</p>
      </div>
    </div>
  );
}
