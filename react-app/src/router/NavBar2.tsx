import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Image, Navbar } from "react-bootstrap";
import '../App.css';
import BackArrow from '../assets/backArrow.svg';
import ReactLogo from '../assets/React-icon.svg';
import useWindowDimensions from '../components/GetWindowSize';
import { TITLE } from "../constants/String";
import '../styles/Search.css';




export const NavBar2 = (props: any) => {

    const { width } = useWindowDimensions();


   
    const reactLogoImg = {
        height: 50, width: 50
    }
    const mainView = {
        height: 100, backgroundColor: '#000',
    }
    const titleText = {
        color: '#fff',
        fontWeight: '700'
    }

    const navView = {
        alignItems: 'center',
        width: width / 1.8,
        justifyContent: 'space-between'
    }
    const backArrow = {
        height: 15, width: 15,
        marginLeft: 60, cursor: 'pointer'
    }
    const imgView = {
        alignItems: 'center',
        justifyContent: 'center'
    }
    const lableStyle = {
        color: '#18CA75', fontWeight: '300'
    }

    return (
        <Navbar className='d-flex font-link' style={mainView}>
            <div className="d-flex flex-row "
                style={navView}>

                <div onClick={props.onClickBack}>
                    <Image

                        src={BackArrow}
                        style={backArrow}
                    />

                </div>


                <div className="d-flex flex-row "
                    style={imgView}
                >
                    <Image
                        src={ReactLogo}
                        style={reactLogoImg}
                    />
                    <Navbar.Brand href="/" style={titleText}>{TITLE}</Navbar.Brand>
                </div>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <>
                    <label style={lableStyle}>
                        Favourites
                    </label>
                </>
            </Navbar.Collapse>
        </Navbar>
    );
};
