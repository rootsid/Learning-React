import React from 'react';

function Hello(props) {

    function ClickMe() {
        alert("Button Is Clicked")
    }

    return (
        <div>
            <h1>Hello : {props.name} </h1>
            <button className = "btn btn-success" onClick = {ClickMe}>Click me</button>
        </div>
    )
}

export default Hello;