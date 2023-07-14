import React from 'react'

function TrailCard({ trail }) {

    const {
        id,
        name,
        difficulty,
        length,
        photo,
        number_of_reviews,
        average_rating
    } =  trail

    return(
        <div className="trail-card">
            <a href={`/trails/${id}`}>
            <img src={photo} alt="trail"></img>
            <span>{difficulty}</span>
            <span> • </span>
            <span id="star">{'\u2605'}</span>
            <span> {average_rating}</span>
            <span className="grey"> ({number_of_reviews})</span>
            <h3>{name}</h3>
            <p>Length: {length} mi</p>
            </a>
        </div>
    )
}

export default TrailCard