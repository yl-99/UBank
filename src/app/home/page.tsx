import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Home() {
  return (
   
    <div className="flex gap-4 items-center">
      <Button size="lg">
        Borrowed $
      </Button>  
      <Button size="lg">
        Loaned $
      </Button>  
      <Button size="lg">
        Loans
      </Button>  
      <Button size="lg">
        Get Loans
      </Button> 
    </div>    
  );
}