import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Home</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/search-by-ingredient' activeStyle>
            Search by Ingredient
          </NavLink>
          <NavLink to='/nutrition' activeStyle>
            Nutrition
          </NavLink>
          <NavLink to='/expenses' activeStyle>
            Expenses
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;