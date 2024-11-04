import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import data from "./History.json";
import './History.css';

const History = () => {
  return (
    <Container className="history-container">
        <Row className="justify-content-md-center">
            <Col md={10}>
                <h2 className="history-title">Background </h2>
                <ul className="timeline">
                    {data.map((item,index)=> (
                        <li key = {index}>
                            <p className="timeline-date">{item.date}</p>
                            <div className="timeline-content">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    </Container>
  );
};

export default History