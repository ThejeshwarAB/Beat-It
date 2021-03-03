import React from 'react';
// import Score from '../Components/Score';
import {
    Container,
    Row, Col
} from 'react-bootstrap';
import Title from '../Components/Title';

function Game(props) {
    return (
            <Container className="text-center ">
                <Title />
                <Row>
                    <Col className="emptyBox"></Col>
                    <Col className="emptyBox"></Col>
                    <Col className="emptyBox"></Col>
                </Row>
                <Row>
                    <Col className="emptyBox"></Col>
                    <Col className="emptyBox"></Col>
                    <Col className="emptyBox"></Col>
                </Row>
                <Row>
                    <Col className="emptyBox"></Col>
                    <Col className="emptyBox"></Col>
                    <Col className="emptyBox"></Col>
                </Row>
            </Container>
    );
}

export default Game;