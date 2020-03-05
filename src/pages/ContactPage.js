import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    // the state of the form
    this.state = {
      // full name
      name: "",
      // email
      email: "",
      // message
      message: "",
      // boolean to disable button
      disabled: false,
      // validation text shown if email has been sent
      emailSent: null
    };
  }

  // ------------------------ FUNCTIONS ------------------------------

  // handleChange - handles the changes to the textbox
  handleChange = event => {
    // object that dispatched the event
    const target = event.target;
    // storing the traget's(object's) value to value
    const value = target.value;
    // storing the target's(object's) name to name
    const name = target.name;

    // updating the state using setState
    this.setState({
      [name]: value
    });
  };

  // handleSubmit - called when user hits the submit button
  handleSubmit = event => {
    // prevents default behaviour to refresh page
    event.preventDefault();

    this.setState({
      // to set disabled state to true to disable user to send twice
      disabled: true,
      emailSent: false
    });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          {/* onSubmit - calls the handleSubmit method */}
          <Form onSubmit={this.handleSubmit}>
            {/* Full Name TextBox */}
            <Form.Group>
              {/* htmlFor - react for/id  */}
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                // must be the same as htmlFor
                id="full-name"
                name="name"
                type="text"
                // value entered on the textbox
                value={this.state.name}
                // when something change inside the textbox, it calls the handleChange method
                onChange={this.handleChange}
              />
            </Form.Group>

            {/* Email TextBox */}
            <Form.Group>
              {/* htmlFor - ReactJS for/id  */}
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                // must be the same as htmlFor
                id="email"
                name="email"
                type="email"
                // value entered on the textbox
                value={this.state.email}
                // when something change inside the textbox, it calls the handleChange method
                onChange={this.handleChange}
              />
            </Form.Group>

            {/* Message TextBox */}
            <Form.Group>
              {/* htmlFor - ReactJS for/id  */}
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                // must be the same as htmlFor
                id="message"
                name="message"
                // as - for textarea
                as="textarea"
                rows="3"
                // value entered on the textbox
                value={this.state.message}
                // when something change inside the textbox, it calls the handleChange method
                onChange={this.handleChange}
              />
            </Form.Group>

            {/* Enable user to submit the form */}
            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {/* Conditional Statement - Validation Text if email has been sent */}
            {/* if this.state.emailSent is true */}
            {this.state.emailSent === true && (
              // d-inline - display inline
              // success-msg - custom styling class that change text to green
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {/* if this.state.emailSent is false */}
            {this.state.emailSent === false && (
              // d-inline - display inline
              // err-msg - custom styling class that change text to red
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
