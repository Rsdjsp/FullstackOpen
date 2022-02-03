import React from 'react'

function Persons({itemList}) {
    return (
        <div>
            {itemList()}
        </div>
    )
}

export default Persons
