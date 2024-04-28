'use client'
import React from "react";
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import {Button, Input} from "@nextui-org/react";


 
export default function LoginPage() {
  const router = useRouter()
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <div
      className="flex w-full flex-wrap md:flex-nowrap gap-8" >
      <Input type="email" name="email" placeholder="Email" required />
      <Input type="password" name="password" placeholder="Password" required />
      </div>
      <Button color="primary" size="sm" variant="ghost">Login</Button>
      
    </form>
  )
}




