import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Image, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import '../App.css';
import HeartLogo from '../assets/HEART_FILLED.svg';
import ReactLogo from '../assets/React-icon.svg';
import BackArrow from '../assets/backArrow.svg';
import { TITLE } from "../constants/String";
import '../styles/Search.css';




export const NavBar2 = () => {

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
        <Navbar style={{  backgroundColor: 'transparent', top: 0 }}>
            <>
                <Image
                    src={BackArrow}
                    style={{ height: 50, width: 50 }}
                />
                <Navbar.Brand href="/" style={{ color: '#fff' }}>{TITLE}</Navbar.Brand>
            </>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <>
                    {/* <form className="searchbar"> */}
                    <input type="search" placeholder="Search here" style={{ color: '#fff', marginRight: 25 }} />

                    {/* </form> */}
                    <Image
                        src={HeartLogo}
                        style={{ height: 25, width: 25, marginRight: 20 }}
                    />
                </>
            </Navbar.Collapse>
        </Navbar>
    );
};
