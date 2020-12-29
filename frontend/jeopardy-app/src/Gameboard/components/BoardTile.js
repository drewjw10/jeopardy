import React from "react";
import Card from "react-bootstrap/Card";

const BoardTile = (props) => {
    const { content } = props;
    return (
    <Card style={{ width: '5rem' }}>
        <Card.Body>
            {content} Hello!
        </Card.Body>
    </Card>
    );
}

export default BoardTile;