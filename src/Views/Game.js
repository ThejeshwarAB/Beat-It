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

    const [counter, setCounter] = useState(15);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    const [score, setScore] = useState(0);

    const [random, setRandom] = useState(<Random lower={1} upper={9} floating={0} />);

    useEffect(() => {
        counter > 0 && setTimeout(() => setRandom(<Random lower={1} upper={9} floating={0} />), 1000);
    }, [random]);


    return (
        <Container className="text-center GameCss">
            <Title />
            <Timer counter={counter} />
            {random}
            <Score score={score} />
            <Row>
                <Col className="emptyBox" key='1'>
                    <Image random={random} score={score} setScore={setScore} keyValue={1}/>
                </Col>
                <Col className="emptyBox" key='2'>
                    <Image random={random} score={score} setScore={setScore} keyValue={2}/>
                </Col>
                <Col className="emptyBox" key='3'>
                    <Image random={random} score={score} setScore={setScore} keyValue={3}/>
                </Col>
            </Row>
            <Row>
                <Col className="emptyBox" key='4'>
                    <Image random={random} score={score} setScore={setScore} keyValue={4}/>
                </Col>
                <Col className="emptyBox" key='5'>
                    <Image random={random} score={score} setScore={setScore} keyValue={5}/>
                </Col>
                <Col className="emptyBox" key='6'>
                    <Image random={random} score={score} setScore={setScore} keyValue={6}/>
                </Col>
            </Row>
            <Row>
                <Col className="emptyBox" key='7'>
                    <Image random={random} score={score} setScore={setScore} keyValue={7}/>
                </Col>
                <Col className="emptyBox" key='8'>
                    <Image random={random} score={score} setScore={setScore} keyValue={8}/>
                </Col>
                <Col className="emptyBox" key='9'>
                    <Image random={random} score={score} setScore={setScore} keyValue={9}/>
                    {/* <img src={Image} alt="Mole" className="imageCss" onClick={()=>setScore(score+1)} /> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Game;