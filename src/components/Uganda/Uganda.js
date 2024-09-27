import React from "react";
import FlagImg from "../../assets/Flag_of_Uganda.svg.png";
import UgandaImg from "../../assets/political-uganda.jpg";
import SeaHawksImg from "../../assets/seahawks-logo.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Uganda() {
  return (
      <div className="container">
        <div className="align-items-center my-5">
          <div>
            <img className="worldImg" src={FlagImg} alt="Uganda Country Flag"/>
            <h1 className="c1">Global Health Research</h1>
            <h1 className="c2">Methods & Program Implementation</h1>
            <h1 className="c3">in Uganda</h1>
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
                <img src={UgandaImg} alt="uganda country" />
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
                <img src={SeaHawksImg} alt="uncw seahawks" />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <div>
            <div className="description">Program Description</div>
            <ul>
              <li>Students will spend 6-weeks immersed in Ugandan culture, living and working with Ugandan students.</li>
              <li>Students will work in a local village on a team with Ugandan students to collect research data and implement the Malaria Mastery prevention program.</li>
              <li>We will travel to Kampala for meetings at the Ministry of Health with the Malaria Elimination Program and to the Uganda National Virus Institute's Target Malaria program to discuss their efforts to eliminate malaria.</li>
              <li>Cultural and sight seeing visits to a UNESCO Heritage site and National Museum.</li>
              <li>Two overnight excursions to different towns to get a sense of the beauty and variety Uganda has to offer.</li>
              <li>End the experience with a week-long safari, including Rhino tracking, Chimpanzee tracking, and Murchison Falls National Park.</li>
            </ul>
          </div>
        </Row>
        <br />
        <br />
        <div className="tripleTitle">Global Health Research and Program Implementation</div>
        <Row>
          <Col>
          <img src="holder.js/100px180" alt="place" />
          <div>div1</div>
          </Col>
          <Col>
          <img src="holder.js/100px180" alt="place" />
          <div>div2</div>
          </Col>
          <Col>
          <img src="holder.js/100px180" alt="place" />
          <div>div2</div>
          </Col>
        </Row>
        <br />
        <br />
        <div className="tripleTitle">Section 2</div>
        <Row>
          <Col>
          <img src="holder.js/100px180" alt="place" />
          <div>Research Data Collection</div>
          </Col>
          <Col>
          <img src="holder.js/100px180" alt="place" />
          <div>Malaria Mastery Program Implementation</div>
          </Col>
          <Col>
          <img src="holder.js/100px180" alt="place" />
            <Link className="nav-link" to="/excursions" >
              <div>Overnight Excursions</div>
            </Link>
          </Col>
        </Row>
        <br />
        <br />
      </div>
  );
}


export default Uganda;