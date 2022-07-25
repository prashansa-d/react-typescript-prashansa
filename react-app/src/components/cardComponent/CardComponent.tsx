import React from 'react';
import { Card, Image } from 'react-bootstrap';
import '../../App.css';
import Heart from '../../assets/HEART.svg';
import HeartLogo from '../../assets/HEART_FILLED.svg';
import { CharacterModal } from '../../interfaces/interface';
import { useAppSelector } from '../../redux/hooks';
import { style } from './Card.styles';

interface CharacterListProps {
    item: CharacterModal;
    onClickFav: (item: CharacterModal) => void;
    onClickDetail: () => void;
}


export const CardComponent: React.FC<CharacterListProps> = ({ item, onClickDetail, onClickFav }) => {

    var Item = item;


    const { favouriteList } = useAppSelector((state) => state.mainReducer);


    const isSelected = favouriteList.findIndex(i => i === Item.char_id) !== -1;



    return (
        <div className="col-md-4 d-flex justify-content-space-between my-3 mx-4 font-link"
            style={style.mainView}>
            <Card className="d "
                style={style.cardView}>
                <Card.Body className='d-flex flex-row align-items-flex-start justify-content-space-between' >
                    <div className='d-flex flex-row align-items-flex-start justify-content-flex-start'
                        onClick={onClickDetail}
                        style={style.clickableView}>
                        <img
                            src={Item?.img}
                            height="200"
                            width={"150"}
                        />
                        <div className='mx-4 mt-3 d-flex flex-column justify-content-space-between align-items-flex-start'
                            style={style.nameView}>

                            <div>
                                <Card.Title style={style.textStyle}>{Item?.name}</Card.Title>
                                <Card.Text style={style.textStyle2}>{Item?.nickname}</Card.Text>
                            </div>
                            <div className='d-flex'
                                style={style.potrayedView}>
                                <label style={style.potrayedStyle}>Portrayed</label>
                                <label style={style.potrayedStyle2}>{Item?.nickname}</label>
                            </div>

                        </div>
                    </div>
                    <div className='mt-3 ml-5'
                        onClick={(e) => {
                            e.preventDefault();
                            onClickFav(Item)
                        }}
                        style={style.heartLogo}>
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



