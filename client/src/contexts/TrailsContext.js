import {useState, useEffect, createContext, useContext} from 'react'
import { UserContext } from './UserContext'

const TrailsContext = createContext()

function TrailsProvider({children}) {
    const [trails, setTrails] = useState([])
    const {user} = useContext(UserContext)
    useEffect(() => {
        fetch("/trails")
        .then((r) => r.json())
        .then((trails) => setTrails(trails))
      }, [])

    return(
        <TrailsContext.Provider value={{trails, setTrails}}>
            {children}
        </TrailsContext.Provider>
    )
}

export {TrailsContext, TrailsProvider}
