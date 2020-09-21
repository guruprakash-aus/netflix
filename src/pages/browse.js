import React from 'react'
import { useContent } from '../hooks'

function Browse() {
    
    // We need the series and the films
    const { series } = useContent('series');
    console.log(series)
    // We need slides

    // Pass it to the browse container

    return (
        <div>
            <h1> Hello from Browse!!</h1>
        </div>
    )
}

export default Browse