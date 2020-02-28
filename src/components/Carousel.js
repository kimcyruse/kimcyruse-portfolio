import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// importing images from image folder
// import imageNotAvailable from "../assets/images/imageNotAvailable.jpg";
import blackjack from "../assets/images/blackjack.png";
import colorImage from "../assets/images/colorImage.png";
import patatapClone from "../assets/images/patatapClone.jpeg";

import Card from "./Card";

// Carousel component for the Projects
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items array with 3 objects
      items: [
        {
          // id of the object
          id: 0,
          //   title of the project
          title: "Patatap Clone",
          //   information about the project
          subTitle: "Cloning the Patatap Animation",
          //   image of the project
          imgSrc: patatapClone,
          //   link to the project
          link: "https://github.com/kimcyruse",
          //   boolean if project is selected
          selected: false
        },
        {
          id: 1,
          title: "Color Game",
          subTitle: "RGB Color Game",
          imgSrc: colorImage,
          link: "https://github.com/kimcyruse",
          selected: false
        },
        {
          id: 2,
          title: "Black Jack",
          subTitle: "A Black Jack Game",
          imgSrc: blackjack,
          link: "https://github.com/kimcyruse",
          selected: false
        }
      ]
    };
  }

  // arrow function expression
  // a method that handles if the Card(Project) is selected
  // that take in an id and a card
  handleCardClick = (id, card) => {
    // get us all the items in the state.items array and store it to items
    let items = [...this.state.items];

    // ternary expression
    // if items[id].selected set it to false, if not set it to true
    // to toggle Card on and off
    items[id].selected = items[id].selected ? false : true;

    // loop throught the item, if its not what we selected
    // set it to false
    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    // updating the items in this.state
    this.setState({
      items
    });
  };

  //  a method that creates Card component
  //   which take in items
  makeItems = items => {
    return items.map(item => {
      return (
        // Card component and passing item, onClick method and key
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {/* calling makeItems method and passing {this.state.items} */}
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
