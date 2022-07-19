import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { CardComponent } from '../components/CardComponent';
import { FavouriteListAction } from '../redux/action/action-creator';
import { NavBar2 } from '../router/NavBar2';



export const Favourite = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();



  const mainView = {
    paddingLeft: '110px'
  }

  const { favouriteList, charList } = useSelector((state: any) => state.mainReducer);



  var favChar = charList.filter(function (obj: any) {
    return favouriteList.some(function (obj2: any) {
      return obj.char_id === obj2;
    });
  });





  const onClickLike = (item: any, index: number) => {

    const favList = [...favouriteList];
    const indexPostion = favList.findIndex(i => i === item.char_id)
    if (indexPostion === -1) {
      favList.push(item.char_id)
    } else {
      favList.splice(indexPostion, 1)
    }
    dispatch(FavouriteListAction(favList));

  }

  return (
    < >
      <NavBar2
        onClickBack={() => {
          navigate(-1)

        }}
      />

      <div className="df" style={mainView}>
        {favChar.map((item: object, index: number) => {
          return (
            <CardComponent
              item={item}
              index={index}
              onClickDetail={() => {
                navigate('/characterdetail', { state: { data: item }, replace: true },)
              }}
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
