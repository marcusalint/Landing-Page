import React from 'react'
import { Router } from 'react-router-dom';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';


const Navbar = () => {
  return (
  <>
  
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about"></NavLinks>
          </NavItem>
        </NavMenu>
        
      </NavbarContainer>
    </Nav>
    
  </>
  )
}

export default Navbar
