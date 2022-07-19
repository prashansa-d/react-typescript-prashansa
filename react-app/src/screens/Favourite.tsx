import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { CardComponent } from '../components/CardComponent';
import { FavouriteListAction } from '../redux/action/action-creator';
import { NavBar2 } from '../router/NavBar2';



export const Favourite = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [favlist, setfavlist] = useState<any>([]);
  const [updateList, setupdateList] = useState<any>([]);


  const mainView = {
    paddingLeft: '110px'
  }

  const { favouriteList, charList } = useSelector((state: any) => state.mainReducer);
  console.log("🚀 ~ file: Favourite.tsx ~ line 17 ~ Favourite ~ favouriteList", favouriteList)

  useEffect(() => {

    var favChar = charList.filter(function (obj: any) {
      return favouriteList.some(function (obj2: any) {
        return obj.char_id == obj2;
      });
    });
    setfavlist(favChar)

  }, [])



  const onClickLike = (item: any, index: number) => {

    const favList = [...favouriteList];
    const indexPostion = favList.findIndex(i => i === item.char_id)
    if (indexPostion == -1) {
      favList.push(item.char_id)
    } else {
      favList.splice(indexPostion, 1)
    }
    setfavlist(favList);
    dispatch(FavouriteListAction(favList));

  }

  return (
    <>
      <NavBar2
        onClickBack={() => {
          navigate(-1)

        }}
      />

      <div className="df" style={mainView}>
        {favlist.map((item: object, index: number) => {
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
