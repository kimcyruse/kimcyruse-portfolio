import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// test-particles
import Particles from "react-particles-js";
const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // string
      title: "Kim Cyrus Esquibel",
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
        title: "Kim Cyrus Esquibel",
        subTitle: "A WEB DEVELOPER",
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
      // contact object
      contact: {
        title: "Let's Make Projects"
      }
    };
  }
  render() {
    return (
      <Router>
        {/* padding is 0 */}
        {/* fluid is true - to use full screen */}
        <Container className="p-0" fluid={true}>
          {/* <------------------------ Header ----------------------> */}
          <Navbar bg="transparent" expand="lg">
            {/* for personal branding */}
            <Navbar.Brand>Kim Cyrus Esquibel</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                {/* uses a Link instead of anchor tag */}
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

          {/* test-particles */}
          <Particles
            canvasClassName="particleCanvas"
            params={particleOpt}
          ></Particles>

          {/* <------------------------ Body ----------------------> */}
          {/* Router for Home Page */}
          {/* Route - whenever you are in this 'path' render this 'HomePage' */}
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          {/* Router for Projects Page */}
          {/* Route - whenever you are in this 'path' render this 'ProjectPage' */}
          <Route
            path="/projects"
            render={() => <ProjectsPage title={this.state.projects.title} />}
          />
          {/* Router for About Page */}
          {/* Route - whenever you are in this 'path' render this 'AboutPage' */}
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          {/* Router for Contact Page */}
          {/* Route - whenever you are in this 'path' render this 'ContactPage' */}
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          {/* <------------------------ Footer ----------------------> */}
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
