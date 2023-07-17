import {useState, useEffect, createContext} from 'react'

const TrailsContext = createContext()

function TrailsProvider({children}) {
    const [trails, setTrails] = useState([])
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
