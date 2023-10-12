import { Container, Row, Col } from "react-bootstrap"


export const Acerca =() => {
    return(
        <section className="acerca" id="acerca">
        <Container>
                <Row>
                    <div className="acerca-info">
                    <div className="acerca-video">
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/VRZJDngDBgs?si=V_714cawgWbKDEqB" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <Col  lg={7} xs={12}>
                    <div className="acerca-bx">
                        <h2>Acerca del evento</h2>
                    
                        <p>Experiencias significativas es un evennpmto dirigido por la Dirección de Virtualidad de la Universidad ECCI, que en 2023 celebra una década de prácticas pedagógicas exitosas y nuevos retos en el ámbito académico, su décima edición es nombrada como Actívate donde la incorporación de la innovación tecnológica y la comunicación hacen que el estudiante sea el centro del aprendizaje.</p>

                        <p>
                        La apuesta pedagógica de esta décima versión centra sus esfuerzos en visibilizar estrategias metodológicas aunadas a herramientas tecnológicas llevadas a la reflexión y la práctica docente, de manera que el proceso de enseñanza y aprendizaje se convierte en un elemento vital para aportar a la mejora de la calidad de la educación virtual y presencial.
                        </p>

                        <p>
                        Finalmente, Actívate tiene como objetivo  socializar buenas prácticas docentes, proyectos investigativos y experiencias significativas en educación,en el marco de la innovación y las TIC. 
                        </p>
                   
                    </div>
                    </Col>
                    </div>
                    </Row>
                    </Container>
                    </section>
                    
    )
}