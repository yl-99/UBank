'use client'

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (   
    <div className="flex gap-4" style={{height: "100vh", justifyContent:"center", flexDirection:"column"}}>
    <b style={{display: "inline-block", marginRight: 20, alignSelf:"center"}}>Current Balance $7,500.00</b>
    <br></br>
      <Button size="lg" style={{display: "inline-block", width: "500px", alignSelf:"center"}} onClick={() => router.push('/borrowed')}>
        Borrowed $2,200.00
      </Button>  
      <Button size="lg" style={{display: "inline-block", width: "500px", alignSelf:"center"}} onClick={() => router.push('/loanhistory')}>
        Loaned $3,200.00
      </Button>  
      <Button size="lg" style={{display: "inline-block", width: "500px", alignSelf:"center"}} onClick={() => router.push('/loan')}>
        Create Loans 
      </Button>  
      <Button size="lg" style={{display: "inline-block", width: "500px", alignSelf:"center"}} onClick={() => router.push('/Getloans')}>
        Get Loans
      </Button> 
    </div>    
  );
}