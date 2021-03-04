import React from 'react';
import Mole from '../Mole.png';

function Image(props) {

    let content = <div></div>;

    if(parseInt(props.random) == parseInt(props.keyValue)){
        console.log("equal")
        content = <img src={Mole} 
                alt="Mole" 
                className="imageCss" 
                onClick={()=>props.setScore(props.score+1)} />;
    }

    return (
        <div> 
            {content}
        </div>
    );
}

export default Image;