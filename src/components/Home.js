import React from "react";
import WorldImg from "../assets/Political-World-Map.jpg";
import UgandaImg from "../assets/Good Uganda map.jpg";
import WelcomeImg from "../assets/5 Welcome to Uganda sign.jpg";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';

function Home() {
  return (
      <div className="container">
        <NavBar />
        <div className="align-items-center my-5">
          <div className="imgContainer">
            <img className="worldImg" src={WorldImg} alt="Political World Map"/>
            <div className="overlay">
              <h1 className="centered1">Global Health Research</h1>
              <h1 className="centered2">Training the Next Generation of Social Behavioral Scientists</h1>
              <h1 className="centered3">to Tackle Health Disparities</h1>
            </div>
          </div>
        </div>
        <div className="blueRow">
          <br />
          <div>Learn about contemporary global health issues while exploring beautiful Uganda!</div>
          <br />
        </div>
        <Row className="doubleSpace">
          <Col>
              <Link className="nav-link" to="/uganda" >
                <img src={UgandaImg} alt="ugandaImage" />
              </Link>
          </Col>
          <Col>
              <div className="www">What</div>
              <div className="info">University of North Carolina</div>
              <div className="info">Wilmington</div>
              <br />
              <div className="www">Where</div>
              <div className="info">Uganda</div>
              <br />
              <div className="www">When</div>
              <div className="info">Summer</div>
          </Col>
        </Row>
        {/* <div className="doubleSpace">
          <div className="exTitle">
          <br />
          Research & Presentations
          </div>
          <Row className="rows">
            <Col>
            <img src={null} alt="holder"/>
            <div>holder</div>
            <br />
            </Col>
            <Col>
            <img src={null} alt="holder"/>
            <div>holder</div>
            <br />
            </Col>
            <Col>
            <img src={null} alt="holder"/>
            <div>holder</div>
            <br />
            </Col>
            <Col>
            <img src={null} alt="holder"/>
            <div>holder</div>
            <br />
            </Col>
          </Row>
        </div> */}
        <div className="doubleSpace">
          <div className="contact">
            <br />
              <div className="moreInfo">FOR MORE INFORMATION CONTACT</div>
              <div className="contactInfo">Dr. Michelle Cathorall: <span className="email">cathorallm@uncw.edu</span> </div>
            <br />
          </div>
        </div>
        <Row className="doubleSpace">
          <img src={WelcomeImg} alt="Welcome to Uganda"/>
        </Row>
        <Footer className="doubleSpace" />
      </div>
  );
}

export default Home;