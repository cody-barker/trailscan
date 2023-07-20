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

        <div className="trail-page-container">
            <div className="trail-details-container">
                <span className="detail"><b>Length:</b> {trail.length} mi</span>
                <span className="detail"><b>Difficulty:</b> {trail.difficulty}</span>
                <span className="detail"><b>Family Friendly:</b> {trail.family_friendly}</span>
                <span className="detail"><b>Dogs Allowed: </b>{trail.dogs_allowed}</span>
                <p className="coordinates"><b>Trailhead Coordinates: </b>{trail.trailhead_coordinates}</p>
                <h3>Description</h3>
                <p>{trail.description}</p>
            </div>
            <div className="reviews">
                <h3>Reviews</h3>
                <NavLink to={`/trails/${id}/reviews`}>
                    <button className="green-btn">Write Review</button>
                </NavLink>
                <hr></hr>
                {trail ? (
                    trail.reviews.sort((a,b) => (a.date < b.date) ? 1 : -1).map((review) => {
                        return <TrailReview key={review.id} review={review}/>
                    })
                ) : (
                    <p>"Loading..."</p>
                )}
            </div>
        </div>
        </>
    )
}

export default TrailDetail