import React from 'react'

function TrailCard({ trail }) {

    const {
        id,
        name,
        difficulty,
        length,
        photo
    } =  trail

    console.log(trail)

    return(
        <div className="trail-card">
            <a href={`/trails/${id}`}>
            <img src={photo} alt="trail"></img>
            </a>
            <h3>{name}</h3>
            <p>{length} miles</p>
            <p>Difficulty: {difficulty}</p>
        </div>
    )
}

export default TrailCard