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
        <div className="header-container">
            <div className="header-container">
                <img id="trail-header-photo" src={trail.photo} alt={trail.name}></img>
            </div>
            <div className="trail-header-text">{trail.name}</div>
        </div>
    )
}

export default TrailDetail