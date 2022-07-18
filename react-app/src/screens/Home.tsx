import React, { useEffect, useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { CHARACTER_LIST } from '../constants/URLConstants';
import { NavBar } from '../router/NavBar';
import HeartLogo from '../assets/HEART_FILLED.svg';
import Heart from '../assets/HEART.svg';
import { CardComponent } from '../components/CardComponent';

export const Home = () => {

  const navigate = useNavigate();

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

  return (
    <>
      <NavBar
        onChangeText={(text:string) => {
          console.log("asfsfd", text);
        }}
      />

      <div className="df" style={{ paddingLeft: '110px' }}>
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
