import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";


const NasaCard = (props) => {
  return (
    <div >
      <Card className="mt-4">
        <CardImg
          width="10%"
          height= '100vh'
          src={props.eimg}
          alt="Card image cap"
          style={{ maxWidth: "200px" }}
        />
        <CardBody>
          <CardTitle>{props.eID}</CardTitle>
          <CardSubtitle >Earth Date: {props.eDate}</CardSubtitle>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  )
};

export default NasaCard




// className = 'earth-card'
  // < img src = { props.eimg } alt = 'cool pic' /> 