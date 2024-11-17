import React from "react";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { Row, Col } from "react-bootstrap";
import Alyssa from "../assets/students/Alyssa Robb 2023.JPG";
import Arne from "../assets/students/Arne Burns 2018.jpeg";
import Emma from "../assets/students/Emma Evans 2023.JPG";
import Haley from "../assets/students/Hakey Adrian 2018.jpeg";
import Heather from "../assets/students/Heather Morrone 2023.JPG";
import Jakub from "../assets/students/Jakub Kreuter 2024.jpg";
import Jenna from "../assets/students/Jenna Bustamante 2024.jpg";
import KateC from "../assets/students/Kate Castro 2024.jpg";
import KateM from "../assets/students/Kate Mulholland 2023.JPG";
import Katie from "../assets/students/Katie Gilliland 2024.jpg";
import Maddie from "../assets/students/Maddie Duracinsky 2024.JPG";
import Marybeth from "../assets/students/Marybeth Johnson 2023.JPG";
import Mica from "../assets/students/Mica Coleman 2018.jpg";
import Monica from "../assets/students/Monica Co-Leader 2018.jpeg";
import Stephan from "../assets/students/Stephen Co-Leader 2018.jpg";
import { Link } from "react-router-dom";

function PastStudents() {
    return (
        <div className="container">
            <NavBar />
            <div className="exTitle">
                <br />
                PAST STUDENTS' EXPERIENCE'S
                <br />
                <br />
            </div>
            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                    <a href="">
                        <img src={Katie} alt="Katie Gilliland - 2024"/>
                        <div>Katie Gilliland - 2024</div>
                    </a>
                    </Col>
                    <Col className="doubleSpace1">
                    <a href="">
                        <img src={Jenna} alt="Jenna Bustamante - 2024"/>
                        <div>Jenna Bustamante - 2024</div>
                    </a>
                    </Col>
                    <Col className="doubleSpace1">
                    <a href="">
                        <img src={KateC} alt="Kate Castro - 2024"/>
                        <div>Kate Castro - 2024</div>
                    </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Jakub} alt="Jakub Kreuter - 2024"/>
                            <div>Jakub Kreuter - 2024</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Marybeth} alt="Marybeth Johnson - 2023"/>
                            <div>Marybeth Johnson - 2023</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Maddie} alt="Maddie Durcinsky - 2024"/>
                            <div>Maddie Durcinsky - 2024</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                        <a href="https://youtu.be/r3T0DBgpBAU">
                            <img src={Heather} alt="Heather Morrone - 2023"/>
                            <div>Heather Morrone - 2023</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Alyssa} alt="Alyssa Robb - 2023"/>
                            <div>Alyssa Robb - 2023</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={KateM} alt="Kate Mulholland - 2023"/>
                            <div>Kate Mulholland - 2023</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                        <a href="https://www.youtube.com/watch?v=tsQSjUQ2kd0">
                            <img src={Emma} alt="Emma Evans - 2023"/>
                            <div>Emma Evans - 2023</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Arne} alt="Arne Burns - 2018"/>
                            <div>Arne Burns - 2018</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Haley} alt="Haley Adrian - 2018"/>
                            <div>Haley Adrian - 2018</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Mica} alt="Mica Coleman - 2018"/>
                            <div>Mica Coleman - 2018</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Monica} alt="Monica Co-Leader - 2018"/>
                            <div>Monica Co-Leader - 2018</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="">
                            <img src={Stephan} alt="Stephan Co-Leader - 2018"/>
                            <div>Stephan Co-Leader - 2018</div>
                        </a>
                    </Col>
                </Row>
            </div>
            <Footer className="doubleSpace" />
        </div>
    );
}

export default PastStudents;