import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Home() {
  return (   
    <div className="flex gap-4 items-center">
    <b>Current Balance $0.00</b>
    <br></br>
      <Button size="lg" style={{display: "inline-block", marginRight: 20}}>
        Borrowed $0.00
      </Button>  
      <Button size="lg" style={{display: "inline-block", marginRight: 20}}>
        Loaned $0.00
      </Button>  
      <Button size="lg" style={{display: "inline-block", marginRight: 20}}>
        Loans 
      </Button>  
      <Button size="lg" style={{display: "inline-block", marginRight: 20}}>
        Get Loans
      </Button> 
    </div>    
  );
}