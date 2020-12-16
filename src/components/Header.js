import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap';

import Playback from '../assets/playback_color@2x.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="py-3 border-bottom">
        <Container>
          <NavbarBrand href="/"><img src={Playback} alt="Logo" style={{maxWidth:142}}/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            </Nav>
            <NavbarText className="mr-2 font-weight-normal text-black">kanan@test.com</NavbarText>
            <NavbarText className="rounded-circle bg-info text-white px-3 py-2">K</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;