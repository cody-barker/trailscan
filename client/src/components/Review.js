import React from 'react'

function Review({ review }) {

    const {
        trail_rating,
        condition,
        content,
        username,
        date
    } = review

    return(
        <div>
            <h4>{username}</h4>
            <p>{date}</p>
            <p>Rating: {trail_rating}/5</p>
            <p>Conditions: {condition}</p>
            <p>{content}</p>
        </div>
    )
}

export default Review