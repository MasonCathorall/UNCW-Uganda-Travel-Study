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
                    <a href="https://www.dropbox.com/scl/fi/on3d3ikwnw97shli7a6js/Katie-Gilliland-Advice-for-Students-2024.MOV?rlkey=ajqik6suxagw7ylpvmuoxi57d&st=mkcvgz72&dl=0">
                        <img src={Katie} alt="Katie Gilliland - 2024"/>
                        <div>Katie Gilliland - 2024</div>
                    </a>
                    </Col>
                    <Col className="doubleSpace1">
                    <a href="https://www.dropbox.com/scl/fi/pv2l9zy8pm0zfw03f5myd/Jenna-Bustamante-Advice-for-Future-Students-Part-1-2024.mov?rlkey=6zpcgyh0n3wk4f620ngjihges&st=5np0w55e&dl=0">
                        <img src={Jenna} alt="Jenna Bustamante - 2024"/>
                        <div>Jenna Bustamante - 2024</div>
                    </a>
                    <a href="https://www.dropbox.com/scl/fi/xx4tv6qpxvw3l3h86r33w/Jenna-Advice-for-Future-Students-Part-2-2024.MOV?rlkey=5udkst2q1votxjjf3riqpnxex&st=xd3xdf8h&dl=0">Part 2</a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://www.dropbox.com/scl/fi/dboqdqes4c8hkmsvgxvcx/Jakub-Kreuter-Advice-for-Future-Students-2024.MOV?rlkey=pxsy8w92pea5kc0lo4cvfp3nn&st=lf6y1iem&dl=0">
                            <img src={Jakub} alt="Jakub Kreuter - 2024"/>
                            <div>Jakub Kreuter - 2024</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                    <div><a href="https://www.dropbox.com/scl/fi/eddq399ogi35rk9ac0x4z/Marybeth-Johnson-part-1-2023.MOV?rlkey=ft3y66oj2lhdi265i5fhkarxj&st=e0vvk4my&dl=0">
                            <img src={Marybeth} alt="Marybeth Johnson - 2023"/>
                            <div>Marybeth Johnson - 2023</div>
                        </a></div>
                        <div><a href="https://www.dropbox.com/scl/fi/7nx02d4s4mw45or8pb0wh/Marybeth-Johnson-part-2-2023.MOV?rlkey=giuagoh9910bdjhyxidc9hhwi&st=ibk6lxvn&dl=0">Part 2</a></div>
                        <div><a href="https://www.dropbox.com/scl/fi/pjthvieufyi37ax5sbtac/Marybeth-Johnson-part-3-2023.MOV?rlkey=3btzfvphdvrbf1xvxlmxr48sj&st=i5juncwb&dl=0">Part 3</a></div>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://youtu.be/r3T0DBgpBAU">
                            <img src={Heather} alt="Heather Morrone - 2023"/>
                            <div>Heather Morrone - 2023</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://www.dropbox.com/scl/fi/qf8gjy8irc83833mxy5v0/Alyssa-Robb-2023.mp4?rlkey=23wwcmmznm2ezscw4rsb40q72&st=8x5ub7mk&dl=0">
                            <img src={Alyssa} alt="Alyssa Robb - 2023"/>
                            <div>Alyssa Robb - 2023</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                        <a href="https://www.dropbox.com/scl/fi/64ah7gl33su2hkdrtx3qg/Arne-Burns-SIUE-Team-Co-Leader-2018.mov?rlkey=jk5f9ayiwmaarsmh6evngypjj&st=sntimheq&dl=0">
                            <img src={Arne} alt="Arne Burns - 2018"/>
                            <div>Arne Burns - 2018</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://www.youtube.com/watch?v=tsQSjUQ2kd0">
                            <img src={Emma} alt="Emma Evans - 2023"/>
                            <div>Emma Evans - 2023</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://www.dropbox.com/scl/fi/lwkj8hnynffawrltdwf7m/Haley-Adrian-Uganda-Refelction-Video-2018.mp4?rlkey=hn65tb9nuhrge2p5h8ie7yoeq&st=pnldaleh&dl=0">
                            <img src={Haley} alt="Haley Adrian - 2018"/>
                            <div>Haley Adrian - 2018</div>
                        </a>
                    </Col>
                </Row>
            </div>

            <div className="doubleSpace">
                <Row className="rows1">
                    <Col className="doubleSpace1">
                        <a href="https://www.dropbox.com/scl/fi/ezo1zfdwmuqrwpsebpuat/Mica-Coleman-SIUE-Team-Co-Leader-2018.mov?rlkey=0b66nenglc8h3k9r4uju4xxy6&st=wprxspnu&dl=0">
                            <img src={Mica} alt="Mica Coleman - 2018"/>
                            <div>Mica Coleman - 2018</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <a href="https://www.dropbox.com/scl/fi/h5i3jc20er3ozitaflw20/Stephen-Ndejje-student-1-2018.mp4?rlkey=vwsj7o4c775hjl4hwjlpcg44j&st=grlbjgo6&dl=0">
                            <img src={Stephan} alt="Stephan Co-Leader - 2018"/>
                            <div>Stephan Co-Leader - 2018</div>
                        </a>
                    </Col>
                    <Col className="doubleSpace1">
                        <div><a href="https://www.dropbox.com/scl/fi/eoxo8ixmi44k3jybemxpq/Monica-Co-Leader-Part-1-2018.mp4?rlkey=l9f24a9fp24hwkttqlqqllj5f&st=x3mrn7eg&dl=0">
                            <img src={Monica} alt="Monica Co-Leader - 2018"/>
                            <div>Monica Co-Leader - 2018</div>
                        </a></div>
                        <div><a href="https://www.dropbox.com/scl/fi/7ux3qs2amw3lzp4iawolz/Monica-Co-Leader-Part-2-2018.mp4?rlkey=6ic2jrfmk37cpmy0s97pulk4g&st=nbiphyjd&dl=0">Part 2</a></div>
                        <div><a href="https://www.dropbox.com/scl/fi/t4lbi2knlstt36dd1qfr2/Monica-Co-Leader-Part-3-2018.mp4?rlkey=jw68074ej2t9lhotkw7u3xet3&st=6mju9tik&dl=0">Part 3</a></div>
                    </Col>
                </Row>
            </div>
            <Footer className="doubleSpace" />
        </div>
    );
}

export default PastStudents;