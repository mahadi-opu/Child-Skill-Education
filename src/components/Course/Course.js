import React from 'react';
import { Link } from 'react-router-dom';
import "./Course.css";
import { Card, Col } from 'react-bootstrap';


// Display Course Components part
const Course = (props) => {
    const { picture, name, price, description } = props.course
    return (
        <Col>
            <Card className="shadow-5">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Link to="/courses"><button className="btn-warning rounded px-4 mb-4">Price: ${price}</button></Link> 
            </Card>
      </Col>

    );
};

export default Course;