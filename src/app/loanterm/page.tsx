'use client'

import React from "react";
import {User, Link, Textarea, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

export default function loanterm() {

  const {isOpen, onOpen, onOpenChange} =useDisclosure();  
  return (
    <div className="flex gap-4" style={{height: "100vh", justifyContent:"center", alignContent:"center", flexDirection:"column"}} >
    <User
    name= "Bill Ackman"
      
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
      }}
    />

    <Textarea
    isReadOnly
    label="Loan "
    variant="bordered"
    labelPlacement="outside"
    placeholder="Enter your description"
    defaultValue="Get access to instant cash with this loan"
    className="max-w-xs" 
     /> 
<>
<Button onPress={onOpen} color="primary">ACCEPT</Button>
<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Congratulations!</ModalHeader>
        <ModalBody>
          <p> 
           You have successfully accepted this loan. The loan amount will be deposited into your account shortly!
           </p>

           </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link href="/borrowed">
                <Button color="primary" onClick={onClose}>
                 My Loans
                </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

</>

</div>
  );
 
}
