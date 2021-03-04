import React from 'react';

function Timer(props) {
    return (
        <div>
            <h3>Time left: {props.counter}</h3>
        </div>
    );
}

export default Timer;