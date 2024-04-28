'use client'
import React from "react";
import { useRouter } from 'next/navigation'
import {Button, Input, Link} from "@nextui-org/react";


 
export default function LoginPage() {
  const router = useRouter()
 
  return (
    <div className="flex gap-4" style={{height: "100vh", justifyContent:"center", flexDirection:"column", marginLeft:450}}>

    <Input classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
            "max-w-[500px]"
          ],
        }}
         type="text" label="User Name"  />
    <Input classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
            "max-w-[500px]"
          ],
        }}
        type="password" label="Password"  />

<Button color="primary" variant="bordered" style={{marginTop: 50}} className="max-w-[500px]" onClick={()=> router.push('/home')}>
         Login
      </Button>
  </div>
  );
}




