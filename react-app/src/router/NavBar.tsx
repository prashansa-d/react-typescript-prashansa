import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Image, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import HeartLogo from '../assets/HEART_FILLED.svg';
import ReactLogo from '../assets/React-icon.svg';
import { TITLE } from "../constants/String";
import '../styles/Search.css';




export const NavBar = (props: any) => {

  const navigate = useNavigate();


  const textInput = {
    color: '#fff',
    backgroundColor: '#232323',
    height: 50,
    width: '20%',
    borderRadius: 3,
    marginRight: 25
  };
  const reactLogoImg = {
    height: 50, width: 50
  }
  const mainView = {
    height: 100, backgroundColor: '#000'
  }
  const titleText = {
    color: '#fff',
    fontWeight: '700',
    fontSize: '24px'
  }
  const favImg = {
    height: 25, width: 25, marginRight: 20
  }

  return (
    <Navbar style={mainView}>



      <>
        <Image
          src={ReactLogo}
          style={reactLogoImg}
        />
        <Navbar.Brand href="/" className='font-link' style={titleText}>{TITLE}</Navbar.Brand>
      </>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <>
          <input
            type="search"
            style={textInput}
            onChange={(text: any) => {
              props.onChangeText(text.target.value);
            }} />

          <div style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('favourite')
            }}>
            <Image
              src={HeartLogo}
              style={favImg}
            />
          </div>
        </>
      </Navbar.Collapse>
    </Navbar>
  );
};
