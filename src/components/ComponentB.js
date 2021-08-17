import React from 'react';
import {MyContext} from '../App';

function ComponentB() {
    return (
        <div>
            <MyContext.Consumer>
                {
                    data => {
                        return <h4>{data}</h4>
                    }
                }
            </MyContext.Consumer>
            Component B
        </div>
    )
}

export default ComponentB
