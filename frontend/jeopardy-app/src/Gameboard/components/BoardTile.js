import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const BoardTile = (props) => {
  const { content } = props;
  const [cardText, setCardText] = useState(content);

  // on hover, change class to trigger card flip and also change text of card
  const tileHover = () => {
    setCardText("Answer");
  };

  const tileUnhover = () => {
    setCardText("Question");
  };

  return (
    <Card
      style={{ width: "8rem", height: "8rem" }}
      onMouseEnter={tileHover}
      onMouseLeave={tileUnhover}
    >
      <Card.Body>{cardText}</Card.Body>
    </Card>
  );
};

export default BoardTile;
