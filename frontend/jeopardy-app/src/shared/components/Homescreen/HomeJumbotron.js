import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "./HomeJumbotron.css";

const HomeJumbotron = () => {
  return (
    <div className='introduction-jumbo'>
      <Jumbotron fluid>
        <Container>
          <h1>Jeopardy</h1>
          <p>Create a custom Jeopardy game or choose from community games!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;
