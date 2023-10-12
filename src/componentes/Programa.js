import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProgramaCard } from "./ProgramaCards";
import progImg1 from "../img/programa1.jpg";
import progImg2 from "../img/programa2.jpg";
import progImg3 from "../img/programa3.jpg";
import progImg4 from "../img/programa4.jpg";
import progImg5 from "../img/programa5.jpg";
import tallerImg1 from "../img/taller1.jpg";
import tallerImg2 from "../img/taller2.jpg";
import tallerImg3 from "../img/taller3.jpg";
import tallerImg4 from "../img/taller4.jpg";
import tallerImg5 from "../img/taller5.jpg";
import tallerImg6 from "../img/taller6.jpg";

import {PiPencilLineFill} from "react-icons/pi"

export const Programa = () => {

    const programa = [
        {
          title: "Catalizando el cambio: Competencias para la innovación y el liderazgo transformador",
          description: "8:00 am - 10:00 am",
          imgUrl: progImg1,
        },
        {
          title: "Aprendizaje Basado en Proyectos para la Educación Superior ",
          description: "10:00 am - 11:00 am",
          imgUrl: progImg2,
        },
        {
          title: "Pedagogías activas e innovación en educación superior para el siglo XXI",
          description: "11:00 am - 12:00 m",
          imgUrl: progImg3,
        },
        {
          title: "Uso de herramientas digitales basadas en realidad aumentada para la dinamización de sesiones de aprendizaje",
          description: "2:00 pm - 4:00 pm",
          imgUrl: tallerImg1,
        },
        {
          title: "Storytelling educativo como estrategia didáctica",
          description: "2:00 pm - 4:00 pm",
          imgUrl: tallerImg2,
        },
        {
          title: "Podcast como herramienta pedagógica ",
          description: "2:00 pm - 4:00 pm",
          imgUrl: tallerImg3,
        },
      ];
      const programa1 = [
        {
          title: "Aula invertida: del profesor al coaching formativo, no dictamos, motivamos.",
          description: "9:00 am - 12:00 m",
          imgUrl: tallerImg4,
        },
        {
          title: "Metodología intertextual como apuesta de innovación educativa",
          description: "9:00 am - 12:00 m",
          imgUrl: tallerImg5,
        },
        {
          title: "Pedagogías activas: retos de la educación contemporánea “Desaprender para Aprender”",
          description: "9:00 am - 12:00 m",
          imgUrl: tallerImg6,
        },
        {
          title: "El impacto de la Inteligencia Artificial (IA) y el Metaverso en el desarrollo creativo y el aula de clase",
          description: "2:00 pm - 3:00 pm",
          imgUrl: progImg4,
        },
        {
          title: "Generación de ideas de proyecto apoyadas en Inteligencia Artificial (IA)",
          description: "3:00 pm - 4:00 pm",
          imgUrl: progImg5,
        },

      ];
    
    return(
        <section className="programa" id="programa">
            <Container>
            
                <Row>
                    <Col>
                    <h2>Programa</h2>
                    <p>Participar en ACTÍVATE es muy sencillo, en esta Décima edición hemos dispuesto de dos jornadas con ponencias y talleres para que puedas asistir.
                      <br/>
                    El jueves 26 de octubre las ponencias se desarrollan en la mañana y los talleres serán la tarde; mientras que el viernes 27 de octubre los talleres se desarrollan en la mañana y las ponencias en la tarde. No te quedes sin participar, inscríbete ya.</p>
                    
                    <Tab.Container id="programacion-tabs" defaultActiveKey="first">
                    <Nav variant="pills" id="pills-tab" className="nav-pills mb-5 justify-content-center align-items-center">
                        <Nav.Item>
                          
                            <Nav.Link eventKey="first">Octubre 26</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Octubre 27</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">

                            
                                <Row>

                              <div className="btn-prog">
                              <button className="prog"><a href="https://forms.gle/LfnsASHZYaBjyMGV6" target="_blank">Insecríbete <PiPencilLineFill size={20}/></a></button>
                              </div>
                                
                                    {
                                        programa.map((programa, index) =>{  
                                            return (
                                                <ProgramaCard
                                                key={index}
                                                {...programa}
                                                />
                                            )
                                            })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <div className="btn-prog">
                            <button className="prog"><a href="https://forms.gle/icZqGk8UcVXbfTQW6" target="_blank">Insecríbete <PiPencilLineFill size={20}/></a></button>
                              </div>
                            <Row>
                            

                                    {
                                        programa1.map((programa1,index) =>{  
                                            return (
                                                <ProgramaCard
                                                key={index}
                                                {...programa1}
                                                />
                                            )
                                            })
                                    }
                                    </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-rigth"/>
        </section>

    )
}