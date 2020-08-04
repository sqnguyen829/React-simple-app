import React from 'react'

//function component
function Child(props) {
    return (
        <div>
            <h3>The child's last name is {props.lastName}!</h3>
            <h3>My child also lives at {props.address}</h3>
        </div>
    )
}

export default Child