
import { Container, Col, Row  } from "react-bootstrap";
import { useModal } from "../hook/useModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ponente1 from "../img/ana_ochoa.png";
import cardponente1 from "../img/card_ana_ochoa.png";
import ponente2 from "../img/albenis_cortes.png";
import cardponente2 from "../img/card_albenis_cortes.png";
import ponente3 from "../img/freddy _caraballo.png";
import cardponente3 from "../img/card_freddy_caraballo.png";
import ponente4 from "../img/jorge_casas.png";
import cardponente4 from "../img/card_jorge_casas.png";
import ponente5 from "../img/ana_Avila.png";
import cardponente5 from "../img/card_ana_avila.png";
import ponente6 from "../img/diana_ruiz.png";
import cardponente6 from "../img/card_diana_ruiz.png";
import ponente7 from "../img/fabian_jaimes.png";
import cardponente7 from "../img/card_fabian_jaimes.png";
import ponente8 from "../img/jenny_pinzon.png";
import cardponente8 from "../img/card_jenny_pinzon.png";
import ponente9 from "../img/elkin_morales.png";
import cardponente9 from "../img/card_elkin_morales.png";
import ponente10 from "../img/juan_cotrino.png";
import cardponente10 from "../img/cards_juan_cotrino.png";
import ponente11 from "../img/maribel_garcia.png";
import cardponente11 from "../img/card_maribel_garcia.png";
import ponente12 from "../img/federico_malpica.png";
import cardponente12 from "../img/card_federico_malpica.png";
import colorSharp from "../img/color-sharp.png";
import Modal  from "./Modal";


export const Ponentes = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  


      //Modal
      const[isOpenModalPonente1, openModalPonente1, closeModalPonente1] = useModal(false);
      const[isOpenModalPonente2, openModalPonente2, closeModalPonente2] = useModal(false);
      const[isOpenModalPonente3, openModalPonente3, closeModalPonente3] = useModal(false);
      const[isOpenModalPonente4, openModalPonente4, closeModalPonente4] = useModal(false);
      const[isOpenModalPonente5, openModalPonente5, closeModalPonente5] = useModal(false);
      const[isOpenModalPonente6, openModalPonente6, closeModalPonente6] = useModal(false);
      const[isOpenModalPonente7, openModalPonente7, closeModalPonente7] = useModal(false);
      const[isOpenModalPonente8, openModalPonente8, closeModalPonente8] = useModal(false);
      const[isOpenModalPonente9, openModalPonente9, closeModalPonente9] = useModal(false);
      const[isOpenModalPonente10, openModalPonente10, closeModalPonente10] = useModal(false);
      const[isOpenModalPonente11, openModalPonente11, closeModalPonente11] = useModal(false);
      const[isOpenModalPonente12, openModalPonente12, closeModalPonente12] = useModal(false);


      //End Modal

      return(
        <section className="ponente" id="ponentes">
            <Container>

                <Row>
                    <Col>
                    <div className="ponente-bx">
                        <h2>Ponentes</h2>
                        
                        <Carousel responsive = {responsive} infinite = {true} className="ponentes-slider">

                            <div className="item">
                                <img src={ponente1} alt="img-ponente"/>
                                <button className="btn-ponentes" onClick={openModalPonente1}>Ver más</button>
                                

                            </div>

                            <div className="item">
                                <img src={ponente2} alt="img-ponente"/>
                                <button className="btn-ponentes" onClick={openModalPonente2} >Ver más</button>

    
                            </div>

                            <div className="item">
                                <img src={ponente3} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente3} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente4} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente4} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente5} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente5} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente6} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente6} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente7} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente7} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente8} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente8} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente9} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente9} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente10} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente10} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente11} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente11} >Ver más</button>

                            </div>

                            <div className="item">
                                <img src={ponente12} alt="img-ponente"/>
                                <button className="btn-ponentes"onClick={openModalPonente12} >Ver más</button>

                            </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>

                <Modal 
                isOpen = {isOpenModalPonente1}
                closeModal = {closeModalPonente1}>
                <img src={cardponente1} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente2}
                closeModal = {closeModalPonente2}>
                <img src={cardponente2} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente3}
                closeModal = {closeModalPonente3}>
                <img src={cardponente3} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente4}
                closeModal = {closeModalPonente4}>
                <img src={cardponente4} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente5}
                closeModal = {closeModalPonente5}>
                <img src={cardponente5} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente6}
                closeModal = {closeModalPonente6}>
                <img src={cardponente6} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente7}
                closeModal = {closeModalPonente7}>
                <img src={cardponente7} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente8}
                closeModal = {closeModalPonente8}>
                <img src={cardponente8} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente9}
                closeModal = {closeModalPonente9}>
                <img src={cardponente9} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente10}
                closeModal = {closeModalPonente10}>
                <img src={cardponente10} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente11}
                closeModal = {closeModalPonente11}>
                <img src={cardponente11} alt="img-ponente" className="img-modal"/>
                </Modal>

                <Modal
                isOpen = {isOpenModalPonente12}
                closeModal = {closeModalPonente12}>
                <img src={cardponente12} alt="img-ponente" className="img-modal"/>
                </Modal>
            </Container>
            <img className="background-img-left" src={colorSharp} alt="Fondo2"/>
        </section>
      )

};
