import React from "react";

import CardInfo from "./CardInfo";

function Card(props) {
  return (
    // d-inline-block - so cards are all next to each other
    // onClick listener - calls props.click that takes in an item which is (props.item)
    <div
      className="d-inline-block k-card"
      onClick={e => props.click(props.item)}
    >
      <img
        className="k-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {/* conditionally rendered - means don't show it unless selected */}
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
