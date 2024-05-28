'use client'
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useRouter } from "next/navigation";


export default function Getloans() {

  const router = useRouter()

  return(
    <div className="flex gap-4" style={{height: "100vh", justifyContent:"center", flexDirection:"column", margin:"20px"}}>
     <p style={{fontSize: 20, margin:100, textAlign:"center"}}>Your Qualified Loans</p>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
          />
          <div className="flex gap-3" style={{justifyContent:"flex-end"}}>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button  variant="flat">
                  Filter
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectionMode="multiple"
              >
                  <DropdownItem>
                    
                  </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total loans: 4</span>
        </div>
      </div>
    <Table aria-label="" >
      <TableHeader>
        <TableColumn>Loan</TableColumn>
        <TableColumn>Amount</TableColumn>
        <TableColumn>Interest</TableColumn>
        <TableColumn>Months</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
         <TableCell onClick={() => router.push('/loanterm')}><Avatar style={{display: "inline-block", marginRight: 20}} isBordered radius="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />Tony Reichert</TableCell>
          <TableCell>$350</TableCell>
          <TableCell>2%</TableCell>
          <TableCell>3</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell onClick={() => router.push('/loanterm')}><Avatar style={{display: "inline-block", marginRight: 20}} isBordered radius="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />Zoey Lang</TableCell>
          <TableCell>$2000</TableCell>
          <TableCell>3%</TableCell>
          <TableCell>8</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell onClick={() => router.push('/loanterm')}><Avatar style={{display: "inline-block", marginRight: 20}} isBordered radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026702d" /> Jane Fisher</TableCell>
          <TableCell>$750</TableCell>
          <TableCell>1.5%</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell onClick={() => router.push('/loanterm')}><Avatar style={{display: "inline-block", marginRight: 20}} isBordered radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026708c" /> William Howard</TableCell>
          <TableCell>$50</TableCell>
          <TableCell>4%</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  );
}