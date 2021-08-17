import React, { Component } from 'react';

class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: "sid"
        }
    }

    update = () => {
        this.setState({
            // name: "yo"
            name: this.state.name === "sid" ? "yo" : "sid"
        })
    }

    render () {
        return (
            <div>
                <h1 className="bg-primary text-white text-center">{this.state.name}</h1>
                <button className="btn btn-success" onClick = { this.update }>Change Text</button>
            </div>
        )
    }
}

export default Name;