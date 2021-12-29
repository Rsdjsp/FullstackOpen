import React from 'react'

function Total({excs1, excs2, excs3}) {
    return (
        <div>
            <p>Number of exercises {excs1 + excs2 + excs3}</p>
        </div>
    )
}

export default Total
