import React from "react";
import WorldImg from "../assets/Political-World-Map.jpg";
import UgandaImg from "../assets/political-uganda.jpg";
import BelizeImg from "../assets/belize-image.gif";
import HillImg from "../assets/hill-img.jpg";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Uganda() {
  return (
      <div className="container">
        <div className="align-items-center my-5">
          <div>
            <img className="worldImg" src={WorldImg} alt="Political World Map"/>
            <h1 className="centered1">Global Health Research</h1>
            <h1 className="centered2">Methods & Program Implementation</h1>
            <h1 className="centered3">in Uganda</h1>
          </div>
        </div>
        <div className="blueRow">
          <br />
          <div>Conduct global health research and implement a malaria prevention program in local villages</div>
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
              <div className="info">University of North Carolina Wilmington</div>
              <div className="info">Faculty Led Global Health Research & Malaria Prevention Program</div>
              <br />
              <div className="www">Where</div>
              <div className="info">Uganda</div>
              <br />
              <div className="www">When</div>
              <div className="info">Summer</div>
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
          <img src={HillImg} alt="PeopleHill"/>
        </Row>
        <br />
        <br />
      </div>
  );
}


export default Uganda;