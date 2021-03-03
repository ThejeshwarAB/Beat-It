import React from 'react';
import {
    Button,
    Container
} from 'react-bootstrap';
import Title from '../Components/Title';

function Home(props) {
    return (
        <Container>
            <Title />
            <Button variant="dark" style={{ fontSize: "25px" }}>Start game</Button>
        </Container>
    );
}

export default Home;