import React from 'react'

function TrailCard({ trail }) {

    const {
        name,
        difficulty,
        length,
        photo
    } =  trail

    return(
        <div className="trail-card">
            <img src={photo} alt="trail"></img>
            <h3>{name}</h3>
            <p>{length} miles</p>
            <p>Difficulty: {difficulty}</p>
        </div>
    )
}

export default TrailCard