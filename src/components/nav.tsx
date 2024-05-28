'use client'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter()
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
       
        <Link color="foreground" href="/home">
            <b>UBank</b>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Getloans">
            Get Loans
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/creategroup">
            Group
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button  color="primary" variant="flat" onClick={() => router.push('/')}>
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
