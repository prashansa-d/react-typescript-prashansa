import React, { useState } from 'react'
import { Card, Image } from 'react-bootstrap'
import '../App.css';
import HeartLogo from '../assets/HEART_FILLED.svg';
import Heart from '../assets/HEART.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




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
    const textStyle = {
        color: '#ccc',
        fontSize: '24px',
        fontWeight: 700
    };
    const textStyle2 = {
        color: '#ccc',
        fontSize: '24px',
        fontWeight: 300
    };
    const heartLogo = {
        cursor: 'pointer'
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
                        <div className='mx-4 mt-3 d-flex flex-row justify-content-space-between align-items-flex-start'
                            style={nameView}>

                            <div>
                                <Card.Title style={textStyle}>{Item?.name}</Card.Title>
                                <Card.Text style={textStyle2}>{Item?.nickname}</Card.Text>
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
