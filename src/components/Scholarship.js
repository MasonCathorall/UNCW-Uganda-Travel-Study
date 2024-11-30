import React from "react";
import { NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Row, Col } from "react-bootstrap";
import AlyssaRob from "../assets/Alyssa Robb at SOPHE 2024.jpeg";
import MarybethJohnson from "../assets/Marybeth Johnson and Alyssa Robb at NC SOPHE 2023.jpeg";

function Scholarship () {
    return (
        <div className="container">
            <NavBar />
            <br />
                <Row>
                    <Col>
                        <img src={AlyssaRob} alt="Alyssa Robb at SOPHE 2024"/>
                        <br />
                        <br />
                        <div>Alyssa Rob at SOPHE 2024</div>
                    </Col>
                    <Col>
                        <img src={MarybethJohnson} alt="Marybeth Johnson and Alyssa Robb at NC SOPHE 2023"/>
                        <br />
                        <br />
                        <div>Marybeth Johnson and Alyssa Robb at NC SOPHE 2023</div>
                    </Col>
                </Row>
                <br />
                <div className="exTitle"><span className="bold">
                    <br />
                    Conference Presentations</span>  <span className="italic">(**Indicates Undergraduate Student)</span>
                    <br />
                    <br />
                </div>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;**Gilliland, K., **Duracinsky, M., **Castro, K., &amp; Cathorall, ML. (April 2024). Developing a</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Community Based Malaria Prevention Health Promotion Program. <span className="italic">Presented at the Research</span></span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="italic">and Creative Awards Showcase, UNCW.</span></span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;**Kreuter, J. &amp; Cathorall, ML. (2024 April). Adherence to Intermittent Preventive Treatment Amongst</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Women in Uganda's Luwero District. <span className="italic">Presented at the Uganda World Malaria Day Conference,</span></span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="italic">Kampala, Uganda.</span></span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;**Kreuter, J. &amp; Cathorall, ML. (2024, April). Antimalarial use during pregnancy in a climate of</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;increasing antibiotic resistance. <span className="italic">Presented at the Art and Science of Health Promotion</span></span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="italic">Conference, Hilton Head, SC.</span></span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;Cathorall, ML., Peachey, A., Najjuma, SM., &amp; **Robb, A. (2024, March). Evaluation of an Applied</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Interdisciplinary Travel Study Program for Public Health Undergraduates. <span className="italic">Presented at the</span></span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="italic">Society for Public Health Education Annual Meeting in St. Louis, MO.</span></span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;Cathorall, ML., Peachey, A., Najjuma, SM., &amp; **Robb, A (2024, March). Development of a Community-</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Based Intervention to Reduce Incident Malaria in Rural Uganda. <span className="italic">Presented at the Society for</span></span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="italic">Public Health Education Annual Meeting in St. Louis, MO.</span></span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;** Johnson, M. &amp; Cathorall, ML. (2023, November). Program Plan for Reducing Incident Malaria in</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Central Rural Uganda. <span className="italic">Presented at the NC SOPHE Annual Meeting, Fayetteville, NC.</span></span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;** Robb, A. &amp; Cathorall, ML. (2023, November). Malaria Prevention Attitudes and Behaviors during</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Pregnancy in the Luwero District of Uganda. <span className="italic">Presented at the NC SOPHE Annual Meeting,</span></span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="italic">Fayetteville, NC.</span></span>
                </Row>
                <br />
                <div className="doubleSpace">
                    <div className="exTitle"><span className="bold">
                        <br />
                        Manuscripts in Print</span>  <span className="italic">(**Indicates Undergraduate Student)</span>
                        <br />
                        <br />
                    </div>
                </div>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;** Robb, A. &amp; Cathorall, ML. (2024, June). Malaria Prevention Attitudes and Behaviors during</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Pregnancy in the Luwero District of Uganda. <span className="italic">The Columbia University Journal of Global</span></span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="italic">Health,</span> 14(1). <a href="https://doi.org/10.52214/cujgh.v14i1.12404" target="blank" rel="noreferrer">https://doi.org/10.52214/cujgh.v14i1.12404</a></span>
                </Row>

                <div className="doubleSpace">
                    <div className="exTitle"><span className="bold">
                        <br />
                        Manuscripts Under Review</span>  <span className="italic">(**Indicates Undergraduate Student)</span>
                        <br />
                        <br />
                    </div>
                </div>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;Cathorall, ML., **Peret, K., **Dancausse, C., &amp; Namyalo, PK. (2024, May). Ugandan Road Traffic and</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Safety Laws: A comparative content analysis of select laws. Submitted to Journal of Public</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Health Policy.</span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;**Kreuter, J., &amp; Cathorall, ML. (August 2024). Intermittent Preventive Therapy Adherence Amongst</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Women in the Luwero District of Uganda and Relevant Policy Recommendations: A cross-</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sectional survey. Submitted to Global Health Science and Practice Journal.</span>
                </Row>

                <div className="doubleSpace">
                    <div className="exTitle"><span className="bold">
                        <br />
                        Manuscripts in Process</span>  <span className="italic">(**Indicates Undergraduate Student)</span>
                        <br />
                        <br />
                    </div>
                </div>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;Cathorall, ML., Peachey, A., &amp; Najjuma, SM. Knowledge, attitudes, and practices regarding malaria and</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bed net use in rural Uganda: Applications for theory-based Interventions.</span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;Cathorall, ML., Peachey, A., &amp; Najjuma, SM. Development of a community-based intervention to reduce</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;incident malaria in rural Uganda.</span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;Cathorall, ML., Peachey, A., &amp; Najjuma, SM. Evaluation of a Community Engaged Malaria Prevention</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Health Promotion Program.</span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;Robb, A., Cathorall, ML., Peachey, A., Najjuma, SM., Obwona, J., &amp; Magurrera, M. Evaluation of a</span>
                    <span className="leftShift">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Collaborative Intensive Field Work Orientation Workshop.</span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;**Kreuter, J., &amp; Cathorall, ML. Antibiotic Resistance in Luwero District Uganda.</span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;**Bruno, Z., &amp; Cathorall, ML. Access to healthcare and facilities for malaria treatment.</span>
                </Row>
                <br />
                <Row>
                    <span className="leftShift">&emsp;&emsp;&emsp;**Gilliland, K., &amp; Cathorall, ML. Evaluation of a lesson to increase net repair skills and use.</span>
                </Row>
                <br />

            <Footer />
        </div>
    );
}

export default Scholarship;