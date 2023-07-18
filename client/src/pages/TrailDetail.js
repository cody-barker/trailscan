import { useParams, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import TrailReview from '../components/TrailReview'
import { TrailsContext } from '../contexts/TrailsContext'


function TrailDetail() {
    const {trails} = useContext(TrailsContext)
    let {id} = useParams()
    id = parseInt(id)
    const trail = trails.find((t) => t.id === id)

    if (!trail) {
        return <p>"Loading..."</p>
    }


    return(
        <>
        <div className="header-container">
            <div className="header-container">
                <img id="trail-header-photo" src={trail.photo} alt={trail.name}></img>
            </div>
            <div className="trail-header-text">{trail.name}</div>
        </div>
    
        <div className="trail-details-container">
            <span className="detail">Length: {trail.length} mi</span>
            <span className="detail">Difficulty: {trail.difficulty}</span>
            <span className="detail">Family Friendly: {trail.family_friendly}</span>
            <span className="detail">Dogs Allowed: {trail.dogs_allowed}</span>
            <p>Trailhead Coordinates: {trail.trailhead_coordinates}</p>
            <h3>Description</h3>
            <p>{trail.description}</p>
        </div>
            <div className="reviews">
                <h3>Reviews</h3>
                <NavLink to={`/trails/${id}/reviews`}>
                    <button className="green-btn">Write Review</button>
                </NavLink>
                {trail? (
                    trail.reviews.map((review) => {
                        return <TrailReview key={review.id} review={review}/>
                    })
                ) : (
                    <p>"Loading..."</p>
                )}
            </div>
        
        </>
    )
}

export default TrailDetail