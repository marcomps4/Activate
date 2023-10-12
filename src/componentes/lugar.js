import React from "react";

import { Container, Row, Col } from "react-bootstrap"



 export const Lugar =() =>{
    return(

        <section id="lugar" className="lugar">
        <Container>
            <Col sm={12}>

            <h2>Lugar</h2>
                    <p>El evento se realizará de manera presencial en la sede <strong>S</strong> de la Universidad ECCI y se transmitirá en nuestro canal de YouTube <strong>@EDUCADIGITAL_</strong></p>
                    </Col>

                    <Col sm={12} className="lugar_map">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.756785666897!2d-74.07064038815338!3d4.637423142180748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a32111ae3b9%3A0x27cbf56687f3d394!2sUniversidad%20ECCI%20-%20Sede%20S!5e0!3m2!1ses!2sco!4v1696255533735!5m2!1ses!2sco"
        className="map"
        width="600" 
        height="650" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">

        </iframe>
        </Col>
        </Container>

        </section>
    )
}

