import React from 'react'

function Stadistics({good, neutral, bad}) {
    const sum = good + neutral + bad;
    return (
        <div>
            <p>
          Good <span>{good}</span>
        </p>
        <p>
          Neutral <span>{neutral}</span>
        </p>
        <p>
          Bad <span>{bad}</span>
        </p>
        <p>All <span>{ sum }</span> </p>
         <p>Average <span> {sum /3} </span></p>
         <p>Positive <span> {good /3} % </span></p>
        </div>
    )
}

export default Stadistics
