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

    const { width, height } = useWindowDimensions();


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
        height: 100, backgroundColor: '#000',
    }
    const titleText = {
        color: '#fff'
    }
    const favImg = {
        height: 25, width: 25, marginRight: 20
    }

    return (
        <Navbar className='d-flex' style={mainView}>
            <div className="d-flex flex-row "
                style={{ alignItems: 'center', width: width / 1.8, justifyContent: 'space-between' }}>

                <div onClick={props.onClickBack}>
                    <Image

                        src={BackArrow}
                        style={{ height: 15, width: 15, marginLeft: 60, cursor: 'pointer' }}
                    />

                </div>


                <div className="d-flex flex-row "
                    style={{ alignItems: 'center', justifyContent: 'center', }}
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
                    <label style={{ color: '#fff' }}>
                        Favourites
                    </label>
                </>
            </Navbar.Collapse>
        </Navbar>
    );
};
