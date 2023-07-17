import { useContext } from 'react'
import TrailCard from '../components/TrailCard'
import { UserContext } from '../contexts/UserContext'

function Trails({trails}) {
    const {user} = useContext(UserContext)
    const today = new Date()
    const curHr = today.getHours()
    let greeting;

    if (curHr < 12) {
        greeting = 'Good morning'
      } else if (curHr < 18) {
        greeting = 'Good afternoon'
      } else {
        greeting = 'Good evening'
      }

    return(
     <>
        <div className="header-container">
            <img id="header-photo" src="https://i.imgur.com/zKhMjkQ.jpg" alt="half-dome"></img>
            <div className="header-text">{greeting}, {user.username}</div>
        </div>
        <div className="card-container">
            <h1>Explore trails near you</h1>
        </div>

        <div className="card-container">    
            {trails.length > 0 ? (
                trails.map((trail) => {
                    return <TrailCard key={trail.id} trail={trail}/>
                })
            ) : (
                "Loading..."
            )}
        </div>
    </>
    )
    
}

export default Trails;