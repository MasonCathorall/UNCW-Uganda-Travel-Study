import React from "react";
import FlagImg from "../assets/7 The top of Sipi Falls 2-cropped.jpg";
import { Row, Col } from "react-bootstrap";
import { NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import WelcomeImg from "../assets/5 Welcome to Uganda sign.jpg";
import SF1 from "../assets/SF1 Student behind the falls on the hike.jpeg";
import SF2 from "../assets/SF2 Katie and Jakub Sipi Falls 2024.jpg";
import SF3 from "../assets/SF3 coffee farm.jpeg";
import SF4 from "../assets/SF4 Katie Abseiling extra activity.jpg";
import JT1 from "../assets/JT1 Source of the Nile River.jpg";
import JT2 from "../assets/JT2 River rafting with Flag.jpeg";
import JT3 from "../assets/JT3 hike at cultural site.jpg";
import JT4 from "../assets/JT4 Fav rafting pix just after the level 5 rapid.jpg";
import S1 from "../assets/S1 Rhino tracking.jpg";
import S2 from "../assets/S2 2024 on safari.jpg";
import S3 from "../assets/S3 Keeping an eye on the warthog.jpg";
import S4 from "../assets/S4 Chimpanzee tracking.jpg";

function Excursions() {
    return (
        <div className="container">
          <NavBar />
          <div className="align-items-center my-5">
            <div>
              <img className="worldImg" src={FlagImg} alt="Uganda Country Flag"/>
              <h1 className="center1">Global Health Research</h1>
              <h1 className="center2">Methods & Program Implementation</h1>
              <h1 className="center3">in Uganda</h1>
            </div>
          </div>
          <div className="exTitle">
          <br />
          SIPI FALLS
          <br />
          <br />
          </div>
          <Row className="rows">
            <Col>
            <br />
            <br />
            <img src={SF1} alt="Students Behind the Falls"/>
            <br />
            <br />
            <div>Students Behind the Falls</div>
            <br />
            </Col>
            <Col>
            <br />
            <br />
            <img src={SF2} alt="Katie and Jakub 2024"/>
            <br />
            <br />
            <div>Katie and Jakub 2024</div>
            <br />
            </Col>
            <Col>
            <br />
            <br />
            <img src={SF3} alt="Coffee Farm"/>
            <br />
            <br />
            <div>Coffee Farm</div>
            <br />
            </Col>
            <Col>
            <br />
            <br />
            <img src={SF4} alt="Katie Abseiling"/>
            <br />
            <br />
            <div>Katie Abseiling</div>
            <br />
            </Col>
          </Row>
          <div className="exTitle">
          <br />
          JINJA TOWN
          <br />
          <br />
          </div>
          <Row className="rows">
            <Col>
            <br />
            <br />
            <img src={JT1} alt="Source of the Nile"/>
            <br />
            <br />
            <div>Source of the Nile</div>
            </Col>
            <Col>
            <br />
            <br />
            <img src={JT2} alt="River Rafting with Flag"/>
            <br />
            <br />
            <div>River Rafting with Flag</div>
            </Col>
            <Col>
            <br />
            <br />
            <img src={JT3} alt="Hike at Cultural Site"/>
            <br />
            <br />
            <div>Hike at Cultural Site</div>
            <br />
            </Col>
            <Col>
            <br />
            <br />
            <img src={JT4} alt="Fav Rafting Pic"/>
            <br />
            <br />
            <div>Fav Rafting Pic</div>
            <br />
            </Col>
          </Row>
          <div className="exTitle">
          <br />
          SAFARI
          <br />
          <br />
          </div>
          <Row className="rows">
            <Col>
            <br />
            <br />
            <img src={S1} alt="Rhino Tracking"/>
            <br />
            <br />
            <div>Rhino Tracking</div>
            <br />
            </Col>
            <Col>
            <br />
            <br />
            <img src={S2} alt="2024 on Safari"/>
            <br />
            <br />
            <div>2024 On Safari</div>
            <br />
            </Col>
            <Col>
            <br />
            <br />
            <img src={S3} alt="Keeping an eye on the warthog"/>
            <br />
            <br />
            <div>Keeping An Eye On The Warthog</div>
            <br />
            </Col>
            <Col>
            <br />
            <br />
            <img src={S4} alt="Chimpanzee Tracking"/>
            <br />
            <br />
            <div>Chimpanzee Tracking</div>
            <br />
            </Col>
          </Row>
          {/* <div className="exTitle">
          <br />
          PAST STUDENTS' EXPERIENCE
          <br />
          <br />
          </div> */}

          <br />
          <br />

          <Row>
            <img src={WelcomeImg} alt="Welcome to Uganda"/>
          </Row>
          <br />
          <br />
          <Footer />
        </div>
    );
}

export default Excursions;