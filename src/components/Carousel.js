import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// importing images from image folder
import imageNotAvailable from "../assets/images/imageNotAvailable.png";
import Card from "./Card";

// Carousel component for the Projects
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items array with objects
      items: [
        {
          // id of the object
          id: 0,
          //   title of the project
          title: "Patatap Clone",
          //   information about the project
          subTitle: "Cloning the Patatap Animation",
          //   image of the project
          imgSrc: imageNotAvailable,
          //   link to the project
          link: "https://github.com/kimcyruse",
          //   boolean if project is selected
          selected: false
        },
        {
          id: 1,
          title: "Color Game",
          subTitle: "RGB Color Game",
          imgSrc: imageNotAvailable,
          link: "https://github.com/kimcyruse",
          selected: false
        },
        {
          id: 2,
          title: "Black Jack",
          subTitle: "A Black Jack Game",
          imgSrc: imageNotAvailable,
          link: "https://github.com/kimcyruse",
          selected: false
        }
      ]
    };
  }

  // a method that handles if the Card(Project) is selected
  // that take in an id
  handleCardClick = (id, card) => {
    // get us all the items in the state.items and store it to items
    let items = [...this.state.items];

    // if selected set it to false, if not set it to true
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

  //  a method that creates each items
  //   which take in items
  makeItems = items => {
    return items.map(item => {
      return (
        // Card component and passing item, onClick method and key
        <Card
          item={item}
          onClick={e => this.handleCardClick(item.id, e)}
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
