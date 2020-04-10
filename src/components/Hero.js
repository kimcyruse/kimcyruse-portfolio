import React from "react";

// import bootstraps components
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Typical from "react-typical";

function Hero(props) {
  return (
    // bg-transparent - background is transparent
    // jumbotron-fluid - occupies the entire horizontal space of its parent
    // p-0 - padding is 0
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      {/* fluid={true} - to use entire horizontal space */}
      <Container fluid={true}>
        {/* justify-content-center - to justify the content to center */}
        {/* py-5 - padding y is 5 */}
        <Row className="justify-content-center py-5">
          {/* md={8} - uses 8 grid at meduim */}
          {/* sm={12} - uses 12 grid at small */}
          <Col md={8} sm={12}>
            {/* if this is true - render it */}
            {/* display-1 - display 1 heading larger */}
            {/* font-weight-bolder - weight is bold */}
            {props.title && (
              <h1 className="display-4 text-center font-weight-light">
                {props.title}
              </h1>
            )}
            {/* display-4 - display 4 heading larger */}
            {/* font-weight-light - weight is light */}
            {props.subTitle && (
              <h3 className="display-4 font-weight-light">
                {props.subTitle}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Developer",
                    1000,
                    "Designer",
                    1000,
                    "Traveler",
                    1000,
                    "Raver",
                    1000
                  ]}
                ></Typical>
              </h3>
            )}
            {/* lead - to make paragraph stand out */}
            {/* font-weight-light - weight is light */}
            {props.text && (
              <h3 className="lead font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
