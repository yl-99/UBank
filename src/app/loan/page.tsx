"use client";

import React from "react";
import {Input, DatePicker } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import { 
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell,
  getKeyValue
} from "@nextui-org/react";

export default function App() {
  const placements = [
    "outside",
  ];
  const rows = [
    {
      key: "1",
      rating: "(star) 5.0",
      creditScore: "750",
      income: "(currency) 120000",
    },]
    const columns = [
      {
        key: "rating",
        label: "RATING",
      },{
        key: "creditScore",
        label: "CREDIT SCORE",
      },
      {
        key: "income",
        label: "INCOME",
      },]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          label="Interest"
          placeholder="0.00%"
          labelPlacement="outside"
        />
        <Input
          label="Amount"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>ARS</option>
                <option>EUR</option>
              </select>
            </div>
          }
          type="number"
        />
 <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement,i) => (
            <DatePicker key={i} 
              label={"Date"} 
              className="max-w-[284px]"
              description={placement}
              labelPlacement={"outside"}
            />         
          ))}
        </div>
      </div>  
    </div> 
    <Table aria-label="Example Dynamic collection table">
      <TableHeader columns={columns} >
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
      </div>   
      <div className="flex gap-4 items-center">
      <Button size="lg">
        Public
      </Button>  
      <Button size="lg">
        Private
      </Button>  
    </div>          
    </div>     
  );
}