import React from "react";
import FlagImg from "../assets/Flag_of_Uganda.svg.png";
import { Row, Col } from "react-bootstrap";
import HillImg from "../assets/hill-img.jpg";
import { NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';


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
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
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
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
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
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div>Rhino Tracking</div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div>Chimpanzee Tracking</div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div>Murchison Falls</div>
            </Col>
          </Row>
          <div className="exTitle">
          <br />
          PAST STUDENTS' EXPERIENCE
          <br />
          <br />
          </div>
          <Row className="rows">
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
            <Col>
            <img data-src="holder.js/300x200" alt="placeholder"/>
            <div></div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <img src={HillImg} alt="PeopleHill"/>
          </Row>
          <br />
          <br />
          <Footer />
        </div>
    );
}

export default Excursions;