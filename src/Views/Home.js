import React from 'react';
import {
    Button,
    Container
} from 'react-bootstrap';
import Title from '../Components/Title';
import About from '../Components/About';

function Home(pros) {
    return (
        <Container className="text-center HomeCss">
            <Title />
            <About />
        </Container>
    );
}

export default Home;