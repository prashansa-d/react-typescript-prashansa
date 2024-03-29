import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Image, Navbar } from "react-bootstrap";
import '../../App.css';
import BackArrow from '../../assets/backArrow.svg';
import ReactLogo from '../../assets/React-icon.svg';
import useWindowDimensions from '../../components/GetWindowSize';
import { colors } from '../../constants/Colors';
import { TITLE } from "../../constants/String";


interface NavBarProps {
    onClickBack: () => void;
}


export const NavBar2: React.FC<NavBarProps> = ({ onClickBack }) => {

    const { width } = useWindowDimensions();



    const reactLogoImg = {
        height: 50, width: 50
    }
    const mainView = {
        height: 100, backgroundColor: colors.black, paddingRight: 40
    }
    const titleText = {
        color: colors.white,
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
        color: colors.green, fontWeight: '300'
    }

    return (
        <Navbar className='d-flex font-link' style={mainView}>
            <div className="d-flex flex-row "
                style={navView}>

                <div onClick={onClickBack}>
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
