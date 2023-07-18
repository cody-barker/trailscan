import React from 'react'

function UserProfileReview({ review }) {

    const {
        trail_rating,
        condition,
        content,
        date,
        trailname
    } = review

    return(
        <div>
            <h4>{trailname}</h4>
            <p>{date}</p>
            <p>Rating: {trail_rating}/5</p>
            <p>Conditions: {condition}</p>
            <p>{content}</p>
        </div>
    )
}

export default UserProfileReview