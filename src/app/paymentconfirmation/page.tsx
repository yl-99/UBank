
'use client'
import { Button, Card, CardBody, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";


export default function paymentconfirmation() {
  const {isOpen, onOpen, onOpenChange} =useDisclosure();  
  return (
    <div className="flex gap-x-4" style={{height:'100vh', justifyContent:"center"}}>
    <Card style={{textAlignLast:"center", alignSelf:"center"}}>
      <CardBody>
        <p>Loan Amount: $500.00</p>
          <br></br>
        <p>Loan Details: 3% interest , 5 months from Tim Chime</p>
          <br></br>
        <p>Make a Payment:</p>
          <br></br>
        <p></p>

        <Button onPress={onOpen} color="primary" style={{width:200, margin:10, alignSelf:"center"}}>
          Full Payment $500.00
        </Button> 
        <Button onPress={onOpen} color="primary" style={{width:200, margin:10, alignSelf:"center"}}>
          Minimum Payment $50.00
        </Button>      
        <Button onPress={onOpen} color="primary" style={{width:200, margin:10, alignSelf:"center"}}>
          Custom Payment
        </Button> 
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4" style={{width:500, margin:10, alignSelf:"center"}}>
          <Input type="input" label="Custom amount" />
        </div>
      </CardBody>
    </Card>
<>
<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Congratulations!</ModalHeader>
        <ModalBody>
          <p> 
           You have successfully paid for this loan!
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