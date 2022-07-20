import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { CardComponent } from '../../components/CardComponent';
import { CHARACTER_LIST, SEARCH_CHARACTER_LIST } from '../../constants/URLConstants';
import { CharaListAction, FavouriteListAction } from '../../redux/action/action-creator';
import { NavBar } from '../../router/NavBar/NavBar';
import { CharacterModal } from '../../interfaces/interface';

export const Home = () => {


  const { favouriteList, charList } = useSelector((state: any) => state.mainReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [characterList, setcharacterList] = useState<any>([]);


  useEffect(() => {
    fetch(
      CHARACTER_LIST)
      .then((res) => res.json())
      .then((res) => {
        setcharacterList(res)
        dispatch(CharaListAction(res));
      })
  }, [])





  const onClickLike = (item: CharacterModal, index: number) => {

    const favList = [...favouriteList];
    const indexPostion = favList.findIndex(i => i === item.char_id)
    if (indexPostion === -1) {
      favList.push(item.char_id)
    } else {
      favList.splice(indexPostion, 1)
    }
    dispatch(FavouriteListAction(favList));
  }


  const searchList = (text: string) => {
    if (text.length > 0) {
      console.log("1");

      fetch(`${SEARCH_CHARACTER_LIST}${text}`)
        .then((res) => res.json())
        .then((res) => {
          setcharacterList(res)
        })
    } else {
      console.log("2");

      setcharacterList(charList)
    }
  }

  const mainView = {
    paddingLeft: '90px'
  }



  return (
    <>
      <NavBar
        onChangeText={(text: string) => {
          searchList(text);
        }}
      />

      <div className="df" style={mainView}>
        {characterList.map((item: object, index: number) => {
          return (
            <CardComponent
              item={item}
              index={index}
              onClickDetail={() => {
                navigate('/characterdetail', { state: { data: item } })
              }}
              onClickFav={(item: CharacterModal, index: number) => {
                onClickLike(item, index);
              }}
            />
          )
        })}
      </div>
    </>
  )
}
