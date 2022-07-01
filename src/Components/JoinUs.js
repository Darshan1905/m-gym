import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const JoinUs = () => {

  const callus = () =>{

    history.push("/ContactUs");

  }
  
  let history = useHistory();

  return (
    
      <Card className="text-center">
  <Card.Header className='bg-black'></Card.Header>
  <Card.Body>
    <Card.Title>Marvel The Gym</Card.Title>
    <Card.Text>
    @ MARVEL THE GYM We do things differently here. We are genuinely interested in you and your fitness goals.
    </Card.Text>
    <Button variant="warning" onClick={callus} > Contact Us Now  </Button>
  </Card.Body>
  <Card.Footer className="text-muted bg-black "></Card.Footer>
</Card>  
    
  )
}

export default JoinUs
