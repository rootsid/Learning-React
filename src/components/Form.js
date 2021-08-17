import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: "",
             posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({'posts': data}))
    }
    
    usernameHandler = (event) => {
        this.setState ({
            username: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState ({
            password: event.target.value
        })
    }

    render() {
        const {posts} = this.state

        return (
            <div className="container">
                <input className="form-control" value={this.state.username} type="text" placeholder="Enter Your Username" onChange={this.usernameHandler} />
                <input className="form-control" value={this.state.password} type="password" placeholder="Enter Your Password" onChange={this.passwordHandler} />
                <button className="btn btn-primary">Click Me</button>

                {/* {posts.map(post => 
                    <h4 key ={post.id}>{post.title}</h4>
                    )} */}
            </div>
        )
    }
}

export default Form
