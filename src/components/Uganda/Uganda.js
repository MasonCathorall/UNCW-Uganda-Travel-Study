import React from "react";
import FlagImg from "../../assets/Flag_of_Uganda.svg.png";
import UgandaImg from "../../assets/Good Uganda map.jpg";
import SeaHawksImg from "../../assets/seahawks-logo.png";
import DataCollection from "../../assets/2 Data collection.JPG";
import Implementation from "../../assets/3 Malaria Memory game Malaria Mastery Program Implementation 2024.JPG";
import ExcursionsImg from "../../assets/4 Wings Up in Uganda 2024.jpg";
import SafariImg from "../../assets/1 Safari with Giraffe and Flag.JPG";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavBar } from '../Navbar';
import { Footer } from '../Footer';

function Uganda() {
  return (
      <div className="container">
        <NavBar />
        <div className="align-items-center my-5">
          <div>
            <img className="worldImg" src={FlagImg} alt="Uganda Country Flag"/>
            <h1 className="c2">Applied Global Health</h1>
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
            <div className="descriptionTitle">Program Description</div>
            <ul className="description">
              <li className="descript">Students will spend 6-weeks immersed in Ugandan culture, living and working with Ugandan students.</li>
              <li className="descript">Students will work in a local village on a team with Ugandan students to collect research data and implement the Malaria Mastery prevention program.</li>
              <li className="descript">We will travel to Kampala for meetings at the Ministry of Health with the Malaria Elimination Program and to the Uganda National Virus Institute's Target Malaria program to discuss their efforts to eliminate malaria.</li>
              <li className="descript">Cultural and sight seeing visits to a UNESCO Heritage site and National Museum.</li>
              <li className="descript">Two overnight excursions to different towns to get a sense of the beauty and variety Uganda has to offer.</li>
              <li className="descript">End the experience with a week-long safari, including Rhino tracking, Chimpanzee tracking, and Murchison Falls National Park.</li>
            </ul>
          </div>
        </Row>
        <br />
        <br />
        <div className="exTitle">
          <br />
          Global Health Research and Program Implementation        
          <br />
          <br />
        </div>
        <br />
        <br />
        <Row className="rows">
          <Col>
          <br />
          <br />
          <img src={DataCollection} alt="Research Data Collection"/>
          <br />
          <br />
          <div>Research Data Collection</div>
          <br />
          </Col>
          <Col>
          <br />
          <br />
          <img src={Implementation} alt="Malaria Mastery Program Implementation"/>
          <br />
          <br />
          <div>Malaria Mastery Program Implementation</div>
          <br />
          </Col>
          <Col>
          <br />
          <br />
          <img src={ExcursionsImg} alt="Overnight Excursions"/>
          <br />
          <br />
          <div>Overnight Excursions</div>
          <br />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <img src={SafariImg} alt="Safari"/>
        </Row>
        <br />
        <br />
        <Footer />
      </div>
  );
}


export default Uganda;