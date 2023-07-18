import React from 'react'

function TrailReview({ review }) {

    const {
        trail_rating,
        condition,
        content,
        username,
        formatted_date,
    } = review

    return(
        <div>
            <h4>{username}</h4>
            <p>{formatted_date}</p>
            <p>Rating: {trail_rating}/5</p>
            <p>Conditions: {condition}</p>
            <p>{content}</p>
            <hr></hr>
        </div>
    )
}

export default TrailReview