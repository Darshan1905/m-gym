import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Membership = () => {
  return (
    <div class="container-fluid p-5">
      <div class="mhead  pb-3">
        <h1>Membership</h1>
      </div>
      <CardGroup className="text-center">
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/single.jpg"}
          />
          <Card.Body className="bg-black text-white ">
            <Card.Title className="text-warning">Single</Card.Title>
            <Card.Text>Package for health passionate individuals.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/couple.jpg"}
          />
          <Card.Body className="bg-black text-white">
            <Card.Title className="text-warning">Couple</Card.Title>
            <Card.Text>Enjoy workout with your loved ones.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/family.jpg"}
          />
          <Card.Body className="bg-black text-white">
            <Card.Title className="text-warning"> Family</Card.Title>
            <Card.Text>Fantastic for family fitness.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + "/group.png"} />
          <Card.Body className="bg-black text-white">
            <Card.Title className="text-warning">Group</Card.Title>
            <Card.Text>Friend's forever-workout together.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Membership;
