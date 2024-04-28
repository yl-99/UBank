import React from "react";
import {Input} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


export default function App() {
  const placements = [
    "outside",
  ];
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
          {placements.map((placement) => (
            <DatePicker 
              label={"Birth date"} 
              className="max-w-[284px]"
              description={placement}
              labelPlacement={"outside"}
            />
            
          ))}
        </div>
      </div>  
    </div> 
      </div>
      <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>RATING</TableColumn>
        <TableColumn>CREDIT SCORE</TableColumn>
        <TableColumn>INCOME</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>5.00</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>  
    
  );
}