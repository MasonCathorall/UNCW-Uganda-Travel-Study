import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col size={12} sm={3} className="text-sm-end">
            <p className="footer">Copyright &copy; {year}. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
