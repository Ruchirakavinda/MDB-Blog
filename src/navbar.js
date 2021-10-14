import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBBtn,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer >
      <MDBNavbarBrand href='#'>
            <img
              src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
              <NavLink to='/' style={{color:'black'}}>
               Home
               </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/authors' active>
                <NavLink to='/authors' style={{color:'black'}}>
               Authors
               </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBBtn rounded className='mx-2' color='dark'>
            <NavLink to='/login' style={{color: 'white'}}>
             Log In
             </NavLink>
            </MDBBtn>
            </MDBNavbarItem>

           

            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;