import { Component } from 'react';


class MyClass extends Component {
    clicked () {
        alert('Class clicked')
    }

    render () {
        return (
            <div>
                <h1 className = "bg-primary text-white text-center">My Email is : { this.props.email }</h1>
                <button className = "btn btn-primary" onClick = { this.clicked }>Click</button>
            </div>
        )
    }
}

export default MyClass;