import React from 'react';

function Dinner(props){
    return (
        <div>
            <h1>Today's dinner is {props.dishName}</h1>
        </div>
    )
}

export default Dinner;