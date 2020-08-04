import React from 'react'
import Child from './Child'

//function conponent
function Parent(props) {
    return (
        <div>
            <h2>My last name is Smith. </h2>
            <h2>My address is {props.address}</h2>
            <Child lastName = { "Smith" }
                    address = { props.address }
            />
        </div>
    )
}

export default Parent