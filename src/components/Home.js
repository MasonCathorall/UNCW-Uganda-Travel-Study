import React from "react";
import WorldImg from "../assets/Political-World-Map.jpg";
import UgandaImg from "../assets/Good Uganda map.jpg";
import BelizeImg from "../assets/belize-image.gif";
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
          <div>
            <img className="worldImg" src={WorldImg} alt="Political World Map"/>
            <h1 className="centered1">UNCW Public Health Faculty Led</h1>
            <h1 className="centered2">Global Health</h1>
            <h1 className="centered3">Travel Study Programs</h1>
          </div>
        </div>
        <div className="blueRow">
          <br />
          <div>Learn about contemporary global health issues while exploring beautiful Uganda or Belize!</div>
          <br />
        </div>
        <br />
        <br />
        <Row >
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
              <div className="info">Uganda or Belize</div>
              <br />
              <div className="www">When</div>
              <div className="info">Summer or Spring Break</div>
          </Col>
          <Col>
              <Link className="nav-link" to="https://sites.google.com/celabelize.com/uncw-global-health/home" target="_blank" rel="noopener noreferrer">
                <img src={BelizeImg} alt="belizeImage" />
              </Link>
          </Col>
        </Row>
        <br />
        <br />
        <div className="contact">
          <br />
            <div className="moreInfo">FOR MORE INFORMATION CONTACT</div>
            <div className="contactInfo">Dr. Michelle Cathorall: <span className="email">cathorallm@uncw.edu</span> </div>
          <br />
        </div>
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

export default Home;