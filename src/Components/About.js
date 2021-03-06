import React from 'react';

function About(props) {
    return (
        <div>
            <ul className="listCss">
                <li>Whack the Mole that pops out of the Hole</li><br />
                <li>You have 15 seconds each game</li><br />
                <li>You have are 9 holes to focus</li><br />
                <li>Click Game to start playing</li><br />
                <li><a href="https://github.com/ThejeshwarAB" style={{fontSize: '20px'}}>Contribute</a></li>
                <li><a href="https://www.linkedin.com/in/thejeshwarab/" style={{fontSize: '20px'}}>Suggestion</a></li>
            </ul>
        </div>
    );
}

export default About;