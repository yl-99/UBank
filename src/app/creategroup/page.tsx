"use client"

import React from "react";
import { Input, Button } from "@nextui-org/react";
import { MailIcon } from './MailIcon';
import { useRouter } from 'next/navigation';


export default function GetMember() {

    const router = useRouter();

    const handleSubmitClick = () => {
        router.push(`/assigngroup`);
      };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Create Group</h1>
        <div className="mb-6">
          <Input
            type="text"
            label="Group Name"
            placeholder="5 stacks"
            labelPlacement="outside"
            startContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          />
        </div>
        <div className="mb-6">
          <Input
            type="number"
            label="Amount"
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />
        </div>
        <div className="mb-6">
          <Input
            type="number"
            label="Number of Members"
            placeholder="0"
            labelPlacement="outside"
            startContent={<div className="pointer-events-none flex items-center"></div>}
          />
        </div>
        <div className="mb-6">
          <Input
            type="number"
            label="Interest on Amount"
            placeholder="5%"
            labelPlacement="outside"
            endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          />
        </div>
        <div className="mb-6">
           
          <Button onClick={() => handleSubmitClick()}>Submit</Button>
          
        </div>
      </div>
    </div>
  );
}
