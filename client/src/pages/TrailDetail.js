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

    return (
      <>
        <div className="header-container">
          <div className="header-container">
            <img
              loading="lazy"
              id="trail-header-photo"
              src={trail.photo}
              alt={trail.name}
            ></img>
          </div>
          <div className="trail-header-text">{trail.name}</div>
        </div>

        <div className="trail-page-container">
          <div className="trail-details-container">
            <span className="detail">
              <b>Length:</b> {trail.length} mi
            </span>
            <span className="detail">
              <b>Difficulty:</b> {trail.difficulty}
            </span>
            <span className="detail">
              <b>Family Friendly:</b> {trail.family_friendly}
            </span>
            <span className="detail">
              <b>Dogs Allowed: </b>
              {trail.dogs_allowed}
            </span>
          </div>
          <div className="trail-map-container">
            <h4>Description</h4>
            <p>{trail.description}</p>
            <div className="iframe-wrapper">
              <iframe
                title="trailhead-map"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC97JxmBrPGPb6Pl2DWTcmsvUEIg_I4pkM
                        &q=${trail.trailhead_coordinates}&zoom=13`}
              ></iframe>
            </div>
          </div>

          <div className="reviews">
            <h3>Reviews</h3>
            <NavLink to={`/trails/${id}/reviews`}>
              <button className="green-btn">Write Review</button>
            </NavLink>
            {trail ? (
              trail.reviews
                .sort((a, b) => (a.date < b.date ? 1 : -1))
                .map((review) => {
                  return <TrailReview key={review.id} review={review} />;
                })
            ) : (
              <p>"Loading..."</p>
            )}
          </div>
        </div>
      </>
    );
}

export default TrailDetail