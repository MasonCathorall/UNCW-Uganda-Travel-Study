import React from "react";
import FlagImg from "../assets/Flag_of_Uganda.svg.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Excursions() {
    return (
        <div className="container">
          <div className="align-items-center my-5">
            <div>
              <img className="worldImg" src={FlagImg} alt="Uganda Country Flag"/>
              <h1 className="center1">Global Health Research</h1>
              <h1 className="center2">Methods & Program Implementation</h1>
              <h1 className="center3">in Uganda</h1>
            </div>
          </div>
          <div className="exTitle">SIPI FALLS</div>
          <Row></Row>
          <div className="exTitle">JINJA TOWN</div>
          <Row></Row>
          <div className="exTitle">SAFARI</div>
          <Row></Row>
          <div className="exTitle">PAST STUDENTS' EXPERIENCE</div>
          <Row></Row>
          <br />
          <br />
        </div>
    );
}

export default Excursions;