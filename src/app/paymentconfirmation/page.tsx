
import React from "react";
import {Input, DatePicker } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";


export default function paymentconfirmation() {
  return (
    <Card>
      <CardBody>
        <p>Loan Amount: $0.00</p>
          <br></br>
        <p>Details about Loan:</p>
          <br></br>
        <p>Make a Payment:</p>
          <br></br>
        <p></p>

        <Button color="primary">
          Full Payment $0.00
        </Button> 
        <Button color="primary">
          Minimum Payment $0.00
        </Button>      
        <Button color="primary">
          Custom Payment
        </Button> 
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="input" label="Payment amount" />
        </div>
      </CardBody>
    </Card>
  );
}