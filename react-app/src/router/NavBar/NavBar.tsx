import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Image, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import HeartLogo from '../../assets/HEART_FILLED.svg';
import ReactLogo from '../../assets/React-icon.svg';
import { TITLE } from "../../constants/String";
import '../../styles/Search.css';
import SearchIcon from '../../assets/search.svg';
import { colors } from '../../constants/Colors';

interface Input {
  onChangeText: (text: string) => void;
}

export const NavBar: React.FC<Input> = (props) => {

  const navigate = useNavigate();

  const [hideUnhideSearch, sethideUnhideSearch] = useState(false);

  const textInput = {
    color: colors.white,
    backgroundColor: 'transparent',
    height: 50,
    width: '90%',
    // marginRight: 25,
    border: 'none'
  };
  const reactLogoImg = {
    height: 50, width: 50
  }
  const mainView = {
    height: 100, backgroundColor: colors.black, paddingLeft: 30,
    paddingRight: 30
  }
  const titleText = {
    color: colors.white,
    fontWeight: '700',
    fontSize: '24px'
  }
  const favImg = {
    height: 25, width: 25, marginRight: 20
  };
  const searchImageView = {
    borderRadius: 5, alignItems: 'center',
    marginRight: 20, paddingRight: 10
  };
  const inputImageView = {
    backgroundColor: colors.greyShade,
    borderRadius: 5, alignItems: 'center',
    marginRight: 20, paddingRight: 10
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
          {hideUnhideSearch ?
            <div className='text-end'
              style={inputImageView}>
              <input
                type="search"
                style={textInput}
                onChange={(text: React.ChangeEvent<HTMLInputElement>) => {
                  props.onChangeText(text.target.value);
                }} />
              <Image
                onClick={() => {
                  sethideUnhideSearch(false);
                }}
                src={SearchIcon}
              />
            </div>
            :
            <div className='text-end'
              style={searchImageView}
              onClick={() => {
                sethideUnhideSearch(true);
              }}>
              <Image
                src={SearchIcon}
              />
            </div>}
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
