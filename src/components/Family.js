import React from 'react'
import Parent from './Parent'

//class component
class Family extends React.Component{
    state = {
        address:"123 Blue Street"
    }

    changeAddress = () => {
        this.setState({
            address:"456 Green Street"
        })
    }

    render(){        
        return (
            <div>
                <h1>Family Address: {this.state.address}</h1>
                <Parent address={this.state.address}/>
                <button onClick = {() => this.changeAddress() }> Change the address </button>
            </div>
        )
    }
}

export default Family