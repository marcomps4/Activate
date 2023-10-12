import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AiOutlineForm} from "react-icons/ai";
import headerImg from "../img/header-img.png"


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["aulas", "metas", "proyectos"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate [i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        
                        <h1>{"Mentes que se activan en tus "} <span className="wrap">{text}</span></h1>
                        <p>Bienvenido a la décima edición de Experiencias significativas - Actívate, evento pedagógico de la Dirección de Virtualidad de la Universidad ECCI.</p>
                       
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
