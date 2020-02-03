import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    // mt-5 - margin top 5
    <footer className="mt-5">
      {/* fluid={true} - to use full screen */}
      <Container fluid={true}>
        {/* border-top - create a border on top of element */}
        {/* justify-content-between - creates space between content item */}
        {/* p-3 - padding 3*/}
        <Row className="border-top justify-content-between p-3">
          {/* p-0 - padding 0 */}
          {/* md = {3} - use 3 grid in md */}
          {/* sm = {12} - use 12 grid in sm*/}
          <Col className="p-0" md={3} sm={12}>
            Kim Cyrus Esquibel
          </Col>
          {/* p-0 - padding 0 */}
          {/* d-flex - create simple flexbox container*/}
          {/* justify-content-end - put the content at end */}
          {/* md = {8} - use 8 grid in md */}
          <Col className="p-0 d-flex justify-content-end" sm={12} md={8}>
            © 2019 designed and developed by Kim Cyrus Esquibel
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
