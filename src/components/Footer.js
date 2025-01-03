import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
              <div className="footer">Copyright &copy; {year}. All Rights Reserved.    
                <span className="moveLeft"><SocialIcon href="https://www.instagram.com/uncwresearch_uganda/" url="www.instagram.com" /></span></div>
          </Col>
          
        </Row>
      </Container>
    </footer>
  )
}
