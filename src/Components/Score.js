import React from 'react';

function Score(props) {
    return (
        <div>
            <h3>Your score: {props.score}</h3>
        </div>
    );
}

export default Score;