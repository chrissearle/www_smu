import React from 'react'

import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import '../stylesheets/header.css'

const TitleAndDescription = ({ title }) => {
  return (
    <Navbar color="dark" dark expand="lg">
      <Container>
        <NavbarBrand href="/">
          <img className="logo" src="/logo.png" alt="Logo" />
          {title}
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink href="/categories/photo/">Photography</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/categories/rc/">Radio Control</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/categories/3dp/">3D Printing</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/keys">Cryptographic Keys</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="//about.me/chrissearle/">Other sites</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

const Header = ({ title }) => {
  return <TitleAndDescription title={title} />
}

export default Header
