import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { CardComponent } from '../../components/cardComponent/CardComponent';
import { CharacterModal } from '../../interfaces/interface';
import { FavouriteListAction } from '../../redux/action/action-creator';
import { RootState } from '../../redux/store/store';
import { NavBar2 } from '../../router/NavBar/NavBar2';
import { styles } from './index.styles';



export const Favourite = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const { favouriteList, charList } = useSelector((state: RootState) => state.mainReducer);



  var favChar = charList.filter(function (obj: CharacterModal) {
    return favouriteList.some(function (obj2: Number) {
      return obj.char_id === obj2;
    });
  });





  const onClickLike = (item: CharacterModal) => {

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
    <>
      <NavBar2
        onClickBack={() => {
          navigate(-1)

        }}
      />

      <div className="df" style={styles.mainView}>
        {favChar.map((item: CharacterModal, index: number) => {
          return (
            <CardComponent
              item={item}
              onClickDetail={() => {
                navigate('/characterdetail', { state: { data: item }, replace: true },)
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