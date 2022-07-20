import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../App.css';
import Heart from '../assets/HEART.svg';
import HeartLogo from '../assets/HEART_FILLED.svg';
import { CharacterModal, RootState } from '../interfaces/interface';




export const CardComponent = (props: any) => {

    var Item = props.item;


    const { favouriteList } = useSelector((state: any) => state.mainReducer);


    const isSelected = favouriteList.findIndex((i: Number) => i === Item.char_id) !== -1;


    const mainView = {
        width: "500px"
    };
    const clickableView = {
        width: '100%',
        cursor: 'pointer'
    };
    const nameView = {
        width: '100%'
    };
    const potrayedStyle = {
        color: '#18CA75',
        fontSize: '14px',
        fontWeight: 500,
        marginRight: 25
    };
    const potrayedStyle2 = {
        color: '#fff',
        fontSize: '14px',
        fontWeight: 300
    };
    const textStyle = {
        color: '#fff',
        fontSize: '24px',
        fontWeight: 700
    };
    const textStyle2 = {
        color: '#fff',
        fontSize: '24px',
        fontWeight: '300'
    };
    const heartLogo = {
        cursor: 'pointer'
    };

    const potrayedView = {
        marginTop: 25,
        alignItems: 'center'
    };

    return (
        <div className="col-md-4 d-flex justify-content-space-between my-3 mx-4 font-link"
            style={mainView}>
            <Card className="d "
                style={{ width: "500px", backgroundColor: '#131313' }}>
                <Card.Body className='d-flex flex-row align-items-flex-start justify-content-space-between' >
                    <div className='d-flex flex-row align-items-flex-start justify-content-flex-start'
                        onClick={props.onClickDetail}
                        style={clickableView}>
                        <img
                            src={Item?.img}
                            height="200"
                            width={"150"}
                        />
                        <div className='mx-4 mt-3 d-flex flex-column justify-content-space-between align-items-flex-start'
                            style={nameView}>

                            <div>
                                <Card.Title style={textStyle}>{Item?.name}</Card.Title>
                                <Card.Text style={textStyle2}>{Item?.nickname}</Card.Text>
                            </div>
                            <div className='d-flex'
                                style={potrayedView}>
                                <label style={potrayedStyle}>Portrayed</label>
                                <label style={potrayedStyle2}>{Item?.nickname}</label>
                            </div>

                        </div>
                    </div>
                    <div className='mt-3 ml-5'
                        onClick={(e) => {
                            e.preventDefault();
                            props.onClickFav(Item, props.index)
                        }}
                        style={heartLogo}>
                        <Image
                            src={isSelected ? HeartLogo : Heart}
                            style={{ height: 35, width: 35, marginRight: 20 }}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
