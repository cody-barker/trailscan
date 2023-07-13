import {useEffect, useState} from 'react'
import TrailCard from '../components/TrailCard'

function Trails() {
    const [trails, setTrails] = useState([])

    useEffect(() => {
        fetch("/trails")
        .then((r) => r.json())
        .then((trails) => setTrails(trails))
    }, [])

    return(
        <div className="wrapper">
            <h1>Welcome to TrailScan</h1>
            <p>Connecting you to the best trails around!</p>

            {trails.length > 0 ? (
                trails.map((trail) => {
                    return <TrailCard key={trail.id} trail={trail}/>
                })
            ) : (
                "Loading..."
            )}

        </div>
    )
}

export default Trails;