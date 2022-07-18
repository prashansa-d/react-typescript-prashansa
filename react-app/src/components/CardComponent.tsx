import React, { useState } from 'react'
import { Card, Image } from 'react-bootstrap'
import '../App.css';
import HeartLogo from '../assets/HEART_FILLED.svg';
import Heart from '../assets/HEART.svg';
import { useNavigate } from 'react-router-dom';




export const CardComponent = (item: any, index: number, onClickFav: Function) => {

    var Item = item.item;

    const navigate = useNavigate();

    const [selectedItem, setSelectedItem] = useState(false);

    const parentcall = () => {
        setSelectedItem(!selectedItem);
        onClickFav(item, index)
    }

    const mainView = { width: "500px" };
    const clickableView = { width: '100%', cursor: 'pointer' };
    const nameView = {
        width: '100%'
    };
    const textStyle = {
        color: '#ccc'
    };
    const heartLogo = {
        cursor: 'pointer'
    }

    return (
        <div className="col-md-4 d-flex justify-content-space-between my-3 mx-3"
            style={mainView}>
            <Card className="d "
                style={{ width: "500px", backgroundColor: '#131313' }}>
                <Card.Body className='d-flex flex-row align-items-flex-start justify-content-space-between' >
                    <div className='d-flex flex-row align-items-flex-start justify-content-flex-start'
                        onClick={() => {
                            navigate('characterdetail', { state: { data: Item } })
                        }}
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
                                <Card.Text style={textStyle}>{Item?.nickname}</Card.Text>
                            </div>

                        </div>
                    </div>
                    <div className='mt-3 ml-5'
                        onClick={(e) => {
                            e.preventDefault();
                            parentcall();
                        }}
                        style={heartLogo}>
                        <Image
                            src={selectedItem ? HeartLogo : Heart}
                            style={{ height: 30, width: 30, marginRight: 20 }}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
