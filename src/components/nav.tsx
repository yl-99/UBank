import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";


export default function Nav() {
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
          <Link color="foreground" href="/Getloans">
            Group
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button  color="primary" variant="flat">
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
