import { Container, Row, Col } from "react-bootstrap"
import logo from "../img/logo ecci-icontec.png"
import navicon4 from "../img/nav-icon4.svg"
import navicon2 from "../img/nav-icon2.svg"
import navicon3 from "../img/nav-icon3.svg"
import {ImBooks} from  "react-icons/im"



export const Footer =() => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center footer-info">
                    
                    <Col size={120} sm={4}>
                    <img src={logo} alt="Logos" className="logo_footer"/>
                    </Col>
                    <Col size={120} sm={4} className="text-sm-end footer-info">
                       <p> <strong>Email:</strong>educadigital@ecci.edu.co</p>
                       <p> Carrera 19 No. 49 – 20</p>
                       <p>Sede Principal</p>
                       <p>Bogotá, Colombia</p>
                       <p>< a href="https://www.ecci.edu.co/memorias-evento/" target="_blank"><strong>Memorias <i><ImBooks/></i></strong></a></p>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/AulasECCI?mibextid=ZbWKwL" target="_blank"><img src={navicon2}/></a>
                            <a href="https://instagram.com/ecci_virtual?igshid=MWZjMTM2ODFkZg==" target="_blank"><img src={navicon3}/></a>
                            <a href="https://www.youtube.com/@EDUCADIGITAL_/featured" target="_blank"><img src={navicon4}/></a>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Col size={120} sm={12}>
            <div className="footer_copy">
                <span>&#169; Copyright</span> 
                <span>Derechos Reservados 2023</span>
            </div>
            </Col>
        </footer>
    )
}