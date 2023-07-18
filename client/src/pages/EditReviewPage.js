import React from 'react'
import { useParams } from 'react-router-dom'

function EditReviewPage() {

    let {id, userid} = useParams()
    id = parseInt(id)


    return(
        <>
            <p>{id}</p>
            <p>{userid}</p>
        </>
    )
}

export default EditReviewPage