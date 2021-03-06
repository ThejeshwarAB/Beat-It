import { React, useState, useEffect } from 'react';
import {
    Container,
    Row, Col
} from 'react-bootstrap';
import Title from '../Components/Title';
import Timer from '../Components/Timer';
import Score from '../Components/Score';
import Image from '../Components/Image';
import { Random } from 'react-lodash';

function Game(props) {

    function refresh() {
        window.location.reload(false);
      }

    const [counter, setCounter] = useState(15);

    const [score, setScore] = useState(0);

    const [random, setRandom] = useState(15);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    useEffect(() => {
        counter > 0 && setTimeout(() => setRandom(Math.floor((Math.random() * (9 - 1) + 1))), 1000);
    }, [random]);

    let content = <div><h3 className="p-5 text-danger" onClick={refresh}>You scored: {score} / 15 <br/>Play another game</h3></div>;

    if (counter) {
        content = 
            <div>
                <Row>
                    <Col className="emptyBox" key='1'>
                        <Image random={random} score={score} setScore={setScore} keyValue={1} counter={counter} />
                    </Col>
                    <Col className="emptyBox" key='2'>
                        <Image random={random} score={score} setScore={setScore} keyValue={2} counter={counter} />
                    </Col>
                    <Col className="emptyBox" key='3'>
                        <Image random={random} score={score} setScore={setScore} keyValue={3} counter={counter} />
                    </Col>
                </Row>
                <Row>
                    <Col className="emptyBox" key='4'>
                        <Image random={random} score={score} setScore={setScore} keyValue={4} counter={counter} />
                    </Col>
                    <Col className="emptyBox" key='5'>
                        <Image random={random} score={score} setScore={setScore} keyValue={5} counter={counter} />
                    </Col>
                    <Col className="emptyBox" key='6'>
                        <Image random={random} score={score} setScore={setScore} keyValue={6} counter={counter} />
                    </Col>
                </Row>
                <Row>
                    <Col className="emptyBox" key='7'>
                        <Image random={random} score={score} setScore={setScore} keyValue={7} counter={counter} />
                    </Col>
                    <Col className="emptyBox" key='8'>
                        <Image random={random} score={score} setScore={setScore} keyValue={8} counter={counter} />
                    </Col>
                    <Col className="emptyBox" key='9'>
                        <Image random={random} score={score} setScore={setScore} keyValue={9} counter={counter} />
                    </Col>
                </Row>
            </div>;
    }

    return (
        <Container className="text-center GameCss">
            <Title />
            <div className="timerCss">
                <Timer counter={counter} />
                <Score score={score} />
            </div>
            {content}
        </Container>
    );
}

export default Game;