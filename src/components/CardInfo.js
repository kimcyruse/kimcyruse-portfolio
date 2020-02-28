import React from "react";

import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  // gonna hold the style that we are gonna be using
  // useSpring takes in an object in this case opacity
  // we gonna be changing opacity from 0 - 1
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    // animated tag thats provided by react-spring
    <animated.div className="k-card-info" style={style}>
      <p className="k-card-title">{props.title}</p>
      <p className="k-card-sub-title">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        View
      </a>
    </animated.div>
  );
}

export default CardInfo;
