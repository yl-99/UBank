'use client'

import { Button, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, User, useDisclosure } from "@nextui-org/react";

export default function loanterm() {

  const {isOpen, onOpen, onOpenChange} =useDisclosure();  
  return (
    <div className="flex gap-4" style={{height: "100vh", justifyContent:"center", alignContent:"center", flexDirection:"column"}} >
    <User
    name= "Tony Reichert"
      
      avatarProps={{
        src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"
      }}
    />
<div style={{margin:"50px", alignSelf:"center"}}> <Textarea
    isReadOnly
    label="Loan Details"
    variant="bordered"
    labelPlacement="outside"
    placeholder="Enter your description"
    defaultValue="Get access to instant cash of $350 with this loan at a 2% interest of 3 months"
    className="max-w-xs" 
     /> </div>
   
<>
<Button onPress={onOpen} color="primary" style={{display: "inline-block", width: "500px", alignSelf:"center"}} >ACCEPT</Button>
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
