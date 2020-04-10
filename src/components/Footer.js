import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    // mt-5 - margin top 5
    <footer className="mt-5 footer fixed-bottom">
      {/* fluid={true} - to use full screen */}
      <Container fluid={true}>
        {/* justify-content-between - creates space between content item */}
        {/* p-3 - padding 3*/}
        <Row className="justify-content-between p-3">
          {/* p-0 - padding 0 */}
          {/* sm = {3} - use 3 grid in md */}
          <Col className="p-0" sm={3}>
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fas fa-envelope"></i>
          </Col>
          {/* p-0 - padding 0 */}
          {/* d-flex - create simple flexbox container*/}
          {/* justify-content-end - put the content at end */}
          {/* md = {8} - use 8 grid in md */}
          <Col className="p-0 d-flex justify-content-end" sm={8}>
            ©Kim Cyrus Esquibel
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
