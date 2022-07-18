import React, { useEffect, useState } from 'react';
import '../App.css';
import { CardComponent } from '../components/CardComponent';
import { CHARACTER_LIST } from '../constants/URLConstants';
import { NavBar } from '../router/NavBar';

export const Home = () => {


  const [characterList, setcharacterList] = useState<any>([])

  useEffect(() => {
    fetch(
      CHARACTER_LIST)
      .then((res) => res.json())
      .then((res) => {
        var newData = [...res];
        newData.forEach(function (file) {
          file.selectedItem = false
        })
        setcharacterList(newData)
      })
  }, [])



  const onClickLike = (item: any, index: number) => {

    if (item.selectedItem) {
      characterList[index].selectedItem = false;
    } else {
      characterList[index].selectedItem = true;
    }

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
            // <Card className="d" style={{ width: "15rem" }}>
            <CardComponent
              item={item}
              index={index}
              onClickFav={() => {
                onClickLike(item, index);
              }}
            />
          )
        })}
      </div>
    </>
  )
}
