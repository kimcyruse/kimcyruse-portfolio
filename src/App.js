import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // string
      title: "Kim Cyruse Esquibel",
      // array of objects
      // object { title path}
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      // home object
      home: {
        title: "Be Assertive",
        subTitle: "Projects for fun",
        text: "Checkout my projects below"
      },
      // projects object
      projects: {
        title: "My Work"
      },
      // about object
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Make Projects"
      }
    };
  }
  render() {
    return (
      //
      <Router>
        {/* padding is 0 */}
        {/* fluid is true - to use full screen */}
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            {/* for personal branding */}
            <Navbar.Brand>Kim Cyrus Esquibel</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
