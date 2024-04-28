'use client'
import { Button, Calendar, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function borrowed() {
    const router = useRouter()
  return (
  <div className="flex gap-x-4" style={{height:'100vh', flexDirection:"column", backgroundColor: "white", alignItems:"center"}}>
    
    <p style={{fontSize: 30, marginBottom:30}}><b><u>Borrowed Amount</u></b></p>

    <p style={{fontSize: 20, marginBottom:30 }}><u>$2,200</u></p>

    <Calendar aria-label="Date (No Selection)"  />

       <Listbox style={{marginTop:50, width:500}} >
        <ListboxSection  showDivider>
      <ListboxItem key="home" style={{border:"5px", borderBlockColor:"gray", borderBlockWidth:"50px"}} >
        $500
        <Button color="primary" style={{left:360 }} onClick={() => router.push('/paymentconfirmation')}>Pay</Button>
      </ListboxItem>
      </ListboxSection>
      <ListboxSection  showDivider>
      <ListboxItem key="home" style={{border:"5px", borderBlockColor:"gray", borderBlockWidth:"50px"}} >
        $400
        <Button color="primary" style={{left:360 }} onClick={() => router.push('/paymentconfirmation')}>Pay</Button>
      </ListboxItem>
      </ListboxSection><ListboxSection  showDivider>
      <ListboxItem key="home" style={{border:"5px", borderBlockColor:"gray", borderBlockWidth:"50px"}} >
        $900
        <Button color="primary" style={{left:360 }} onClick={() => router.push('/paymentconfirmation')}>Pay</Button>
      </ListboxItem>
      </ListboxSection><ListboxSection  showDivider>
      <ListboxItem key="home" style={{border:"5px", borderBlockColor:"gray", borderBlockWidth:"50px"}} >
        $100
        <Button color="primary" style={{left:360 }} onClick={() => router.push('/paymentconfirmation')}>Pay</Button>
      </ListboxItem>
      </ListboxSection><ListboxSection  showDivider>
      <ListboxItem key="home" style={{border:"5px", borderBlockColor:"gray", borderBlockWidth:"50px"}} >
        $200
        <Button color="primary" style={{left:360 }} onClick={() => router.push('/paymentconfirmation')} >Pay</Button>
      </ListboxItem>
      </ListboxSection>
    </Listbox>
    </div>
  );
}