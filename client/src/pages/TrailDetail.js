import { useParams } from 'react-router-dom'

function TrailDetail( {trails} ) {
    let {id} = useParams()
    id = parseInt(id)
    const trail = trails.find((t) => t.id === id)

    if (!trail) {
        return <p>"Loading..."</p>
    }

    console.log(trail)

    return(
        <>
        <div className="header-container">
            <div className="header-container">
                <img id="trail-header-photo" src={trail.photo} alt={trail.name}></img>
            </div>
            <div className="trail-header-text">{trail.name}</div>
        </div>
        <div className="trail-details-container">
            <p>Length: {trail.length}</p>
            <p>Difficulty: {trail.difficulty}</p>
            <p>Trailhead Coordinates: {trail.trailhead_coordinates}</p>
            <p>Family Friendly: {trail.family_friendly}</p>
            <p>Dogs Allowed: {trail.dogs_allowed}</p>
            <h3>Description</h3>
            <p>{trail.description}</p>
            <h3>Reviews</h3>
        </div>
        </>
    )
}

export default TrailDetail