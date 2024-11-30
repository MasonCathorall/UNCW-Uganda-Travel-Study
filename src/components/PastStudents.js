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
import Katie from "../assets/students/Katie Gilliland 2024.jpg";
import Marybeth from "../assets/students/Marybeth Johnson 2023.JPG";
import Mica from "../assets/students/Mica Coleman 2018.jpg";

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
                    <a href="https://youtu.be/JPMI51E7PRA" target="_blank" rel="noreferrer">
                        <img src={Katie} alt="Katie Gilliland - 2024"/>
                        <div>Katie Gilliland - 2024</div>
                    </a>
                    </Col>
                    <Col className="doubleSpace1">
                    <a href="https://youtu.be/xlyweFtf7zM" target="_blank" rel="noreferrer">
                        <img src={Jenna} alt="Jenna Bustamante - 2024"/>
                        <div>Jenna Bustamante - 2024</div>
                    </a>
                    <a href="https://youtu.be/kwJ1F9hFgnQ" target="_blank" rel="noreferrer">Part 2</a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://youtu.be/U3u5XMOFu4U" target="_blank" rel="noreferrer">
                            <img src={Jakub} alt="Jakub Kreuter - 2024"/>
                            <div>Jakub Kreuter - 2024</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                    <div><a href="https://youtu.be/REy4nhAUe_c" target="_blank" rel="noreferrer">
                            <img src={Marybeth} alt="Marybeth Johnson - 2023"/>
                            <div>Marybeth Johnson - 2023</div>
                        </a></div>
                        <div><a href="https://youtu.be/1mmMbqLOIJo" target="_blank" rel="noreferrer">Part 2</a></div>
                        <div><a href="https://youtu.be/pqfON4QNmCU" target="_blank" rel="noreferrer">Part 3</a></div>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://youtu.be/r3T0DBgpBAU" target="_blank" rel="noreferrer">
                            <img src={Heather} alt="Heather Morrone - 2023"/>
                            <div>Heather Morrone - 2023</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://youtu.be/OTQ7eQuitwU" target="_blank" rel="noreferrer">
                            <img src={Alyssa} alt="Alyssa Robb - 2023"/>
                            <div>Alyssa Robb - 2023</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                        <a href="https://youtu.be/jnqu7nEKBN0" target="_blank" rel="noreferrer">
                            <img src={Arne} alt="Arne Burns - 2018"/>
                            <div>Arne Burns - 2018</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://www.youtube.com/watch?v=tsQSjUQ2kd0" target="_blank" rel="noreferrer">
                            <img src={Emma} alt="Emma Evans - 2023"/>
                            <div>Emma Evans - 2023</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://youtu.be/5kRl9Y9wrBw" target="_blank" rel="noreferrer">
                            <img src={Haley} alt="Haley Adrian - 2018"/>
                            <div>Haley Adrian - 2018</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col></Col>
                    <Col className="doubleSpace1">
                        <a href="https://youtu.be/5hKitR5P6JI" target="_blank" rel="noreferrer">
                            <img src={Mica} alt="Mica Coleman - 2018"/>
                            <div>Mica Coleman - 2018</div>
                        </a>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
            <Footer className="doubleSpace" />
        </div>
    );
}

export default PastStudents;