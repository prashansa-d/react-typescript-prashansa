import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { CardComponent } from '../../components/cardComponent/CardComponent';
import { CHARACTER_LIST, SEARCH_CHARACTER_LIST } from '../../constants/URLConstants';
import { CharacterModal } from '../../interfaces/interface';
import { CharaListAction, FavouriteListAction } from '../../redux/action/action-creator';
import { useAppSelector } from '../../redux/hooks';
import { NavBar } from '../../router/NavBar/NavBar';
import { styles } from './index.styles';

export const Home = () => {


  const { favouriteList, charList } = useAppSelector((state) => state.mainReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [characterList, setcharacterList] = useState<CharacterModal[]>([]);


  useEffect(() => {
    fetch(
      CHARACTER_LIST)
      .then((res) => res.json())
      .then((res) => {
        console.log("🚀 ~ file: index.tsx ~ line 28 ~ .then ~ res", res)
        setcharacterList(res)
        dispatch(CharaListAction(res));
      })
  }, [])





  const onClickLike = (item: CharacterModal) => {

    const favList = favouriteList
    const indexPostion = favList.findIndex((i) => i === item.char_id)
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





  return (
    <>
      <NavBar
        onChangeText={(text: string) => {
          searchList(text);
        }}
      />

      <div className="df" style={styles.mainView}>
        {characterList.map((item: CharacterModal, index: number) => {
          return (
            <CardComponent
              item={item}
              onClickDetail={() => {
                navigate('/characterdetail', { state: { data: item } })
              }}
              onClickFav={(item: CharacterModal) => {
                onClickLike(item);
              }}
            />
          )
        })}
      </div>
    </>
  )
}



