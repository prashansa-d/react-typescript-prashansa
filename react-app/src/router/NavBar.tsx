import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Image, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import '../App.css';
import HeartLogo from '../assets/HEART_FILLED.svg';
import ReactLogo from '../assets/React-icon.svg';
import { TITLE } from "../constants/String";
import '../styles/Search.css';




export const NavBar = (props:any) => {

  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? 'bold' : 'normal',
  //     textDecoration: isActive ? 'none' : 'underline',
  //   }
  // }

  return (
    // <nav>
    //   <NavLink style={navLinkStyles} to="/">Home</NavLink>
    //   <NavLink style={navLinkStyles} to="/characterdetail">CharacterDetail</NavLink>
    //   <NavLink style={navLinkStyles} to="/favourite">Favourite</NavLink>
    // </nav>
    <Navbar style={{ height: 100, backgroundColor: '#000' }}>
      <>
        <Image
          src={ReactLogo}
          style={{ height: 50, width: 50 }}
        />
        <Navbar.Brand href="/" style={{ color: '#fff' }}>{TITLE}</Navbar.Brand>
      </>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <>
          {/* <form className="searchbar"> */}
          <input
            type="search"
            placeholder="Search here"
            style={{ color: '#000', marginRight: 25 }}
            onChange={(text:any) => {              
              props.onChangeText(text.target.value);
            }} />

          {/* </form> */}
          <div style={{ cursor: 'pointer' }}>
            <Image
              src={HeartLogo}
              style={{ height: 25, width: 25, marginRight: 20 }}
            />
          </div>
        </>
      </Navbar.Collapse>
    </Navbar>
  );
};
