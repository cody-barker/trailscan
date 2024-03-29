import React from "react";
import { NavLink } from "react-router-dom";

function TrailCard({ trail }) {
  const {
    id,
    name,
    difficulty,
    length,
    photo,
    number_of_reviews,
    average_rating,
  } = trail;

  return (
    <div className="trail-card">
      <NavLink className="trail-card" to={`/trails/${id}`}>
        <img src={photo} className="trail__img" alt="trail"></img>
        <div className="trail-card--top-line">
          <span>{difficulty}</span>
          <span> • </span>
          <span id="star">{"\u2605"}</span>
          <span> {average_rating}</span>
          <span className="grey"> ({number_of_reviews})</span>
        </div>
        <h3>{name}</h3>
        <p>Length: {length} mi</p>
      </NavLink>
    </div>
  );
}

export default TrailCard;
