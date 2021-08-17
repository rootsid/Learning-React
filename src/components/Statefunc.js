import React, {useState} from 'react'

function Statefunc() {
    const [count, setCount] = useState(0)
    const [info, setInfo] = useState({name: '', email: ''})

    return (
        <div>
            <p>{count}</p>
            <button className="btn btn-success" onClick={() => setCount(count+1)}>Click Me</button>
            <input type="text" className="form-control" value = {info.name} onChange = {e => setInfo({name: e.target.value})} />
            <input type="text" className="form-control" value = {info.email} onChange = {e => setInfo({email: e.target.value})} />

            <h2>{info.name}</h2>
            <h2>{info.email}</h2>
        </div>
    )
}

export default Statefunc


// import React, { Component } from 'react'

// export class Statefunc extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }

//     clickMe = () => {
//         this.setState ({
//             count: this.state.count + 1
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <p>{this.state.count}</p>
//                 <button className="btn btn-success" onClick={this.clickMe}>Click Me</button>
//             </div>
//         )
//     }
// }

// export default Statefunc
