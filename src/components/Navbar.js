import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import icon from '../icon.png';
import cart from '../cart.png';
import { ButtonContainer } from '../components/Button';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/' className="text-decoration-none">
         {/* <img src={icon} alt="phone" className="navbar-brand" />*/}
          <span className="spn">&#9776;</span>
          <h5 className="shp">nestlify.com</h5>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to='/' className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <img src={cart} alt="trolley" className="navbar-brand" /><span className="mr-2">my cart</span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}


/* window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/



const NavWrapper = styled.nav`
  background: var(--mainBlue);
  position: sticky;
  

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .shp {
    color: var(--lightBlue);
  }
` 
