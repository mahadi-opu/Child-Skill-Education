import React from 'react';
import { Card, Col } from 'react-bootstrap';


// Images for gallery 

const Images = (props) => {
    const { picture } = props.course
    return (

        <Col>
            <Card className="shadow-5">
                <Card.Img variant="top" src={picture} />
            </Card>
      </Col>

    );
};

export default Images;