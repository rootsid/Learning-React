import React, {useState, useEffect} from 'react'

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