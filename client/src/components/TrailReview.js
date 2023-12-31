import React from 'react'

function TrailReview({ review }) {

    const {
        trail_rating,
        condition,
        content,
        username,
        formatted_date,
        profile_image
    } = review

    return(
        <div className="review">
            <h4>{username}</h4>
            <img className="user-thumbnail" src={profile_image} alt="profile"></img>
            <p>{formatted_date}</p>
            <p>Rating: {trail_rating}/5</p>
            <p>Conditions: {condition}</p>
            <p>{content}</p>
        </div>
    )
}

export default TrailReview