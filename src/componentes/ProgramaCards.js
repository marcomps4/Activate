import { Col } from "react-bootstrap";

export const ProgramaCard = ({title, description, imgUrl , button ,formulario}) => {
    return(
        <Col sm={6} md={6}>
            <div className="prog-imgbx">
                <img src={imgUrl}/>
                <div className="prog-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    {/*<button><a src={formulario} target="_blank">{button}</a></button>*/}
                </div>
            </div>
        </Col>
    )
}