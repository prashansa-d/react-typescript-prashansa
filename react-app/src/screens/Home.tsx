import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { CardComponent } from '../components/CardComponent';
import { CHARACTER_LIST } from '../constants/URLConstants';
import { CharaListAction, FavouriteListAction } from '../redux/action/action-creator';
import { NavBar } from '../router/NavBar';

export const Home = () => {



  const { favouriteList } = useSelector((state: any) => state.mainReducer);

  const dispatch = useDispatch();


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





  const onClickLike = (item: any, index: number) => {

    const favList = [...favouriteList];
    const indexPostion = favList.findIndex(i => i === item.char_id)
    if (indexPostion == -1) {
      favList.push(item.char_id)
    } else {
      favList.splice(indexPostion, 1)
    }
    dispatch(FavouriteListAction(favList));
  }

  const mainView = {
    paddingLeft: '110px'
  }

  return (
    <>
      <NavBar
        onChangeText={(text: string) => {
        }}
      />

      <div className="df" style={mainView}>
        {characterList.map((item: object, index: number) => {
          return (
            <CardComponent
              item={item}
              index={index}
              onClickFav={(item: any, index: number) => {
                onClickLike(item, index);
              }}
            />
          )
        })}
      </div>
    </>
  )
}
