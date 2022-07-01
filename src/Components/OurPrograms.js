import React from "react";
import { ListGroup } from "react-bootstrap";

const OurPrograms = () => {
  return (
    <div className="container-fluid pb-4 bg pt-5 pb-5">
      <div className="container  pt-3 pb-3">
        <div className="row ">
          <div className="col-md-6">
            <h1 className="mt-5">Our Programs</h1>
            <h4 className="mt-4">
              Looking for a more personable and flexible gym with no
              intimidation?
            </h4>

            <h6 className="mt-4">
              Come check out the various services SFW THE GYM has to offer. From
              affordable monthly general memberships with personal training
              services that work with your budget and schedule.
            </h6>
          </div>
          <div className="col-md-6">
            <ListGroup variant="flush" className="mt-3 p-3 bg-black  ">
              <ListGroup.Item ><b>Gym</b></ListGroup.Item>
              <ListGroup.Item><b>Cardio</b></ListGroup.Item>
              <ListGroup.Item><b>TRX WORKOUT</b></ListGroup.Item>
              <ListGroup.Item><b>WEIGHT-LIFTING</b></ListGroup.Item>
              <ListGroup.Item><b>YOGA</b></ListGroup.Item>
              <ListGroup.Item><b>DIET</b></ListGroup.Item>
              <ListGroup.Item><b>KICK BOXING</b></ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
