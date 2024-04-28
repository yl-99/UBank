"use client"

import React from "react";
import {Input, DatePicker } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
import { useRouter } from "next/navigation";


export default function paymentconfirmation() {
  const router = useRouter()
  return (
    <Card>
     <div className="flex w-full flex-wrap md:flex-nowrap gap-4 max-w-[500px]" style={{justifyContent: "center"}}>

      <CardBody>
        <p>Loan Amount: $500</p>
          <br></br>
        <p>Interest: 2%</p>
          <br></br>
        <p>Loan Term: 6 months</p>
          <br></br>
        <p>Make a Payment:</p>
          <br></br>
        <p></p>
        <Button color="primary" size="lg" onClick={() => router.push('/home')}>
          Full Payment $502.92
        </Button> 
        <br></br>
        <Button color="primary" size="lg" >
          Minimum Payment $83.92
        </Button>      
        <br></br>
        <Button color="primary" size="lg" >
          Custom Payment
        </Button> 
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 max-w-[500px]" >
          <Input type="input" label="Payment amount" />
        </div>
      </CardBody>
      </div>

    </Card>
  );
}