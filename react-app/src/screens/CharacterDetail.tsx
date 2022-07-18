import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBar2 } from '../router/NavBar2';
import '../App.css';
import { Image } from 'react-bootstrap';
import BackArrow from '../assets/backArrow.svg';
import useWindowDimensions from '../components/GetWindowSize';
import BirthDayLogo from '../assets/bday.svg';


export const CharacterDetail = (props:any) => {
  const routes:any = useLocation();
  const navigate = useNavigate();
  const params = routes?.state?.data;
  const { width, height } = useWindowDimensions();
  const occupation = routes?.state?.data?.occupation;





  return (
    <>
      <div className='Detail'>
        <Image
          src={params?.img}
          className="col-5 col-md-5"
          style={{ height: height }}
        />



        {/* ------------------------First half view------------------------  */}
        <div
          className='d-flex flex-column col-5'
          style={{
            position: 'absolute',
            left: 0, right: 0, bottom: 0, top: 0, padding: 50,
            backgroundImage: "linear-gradient(to bottom, rgba(13, 13, 13, 0.2), rgba(13, 13, 13, 0.9), rgba(0, 0, 0, 1))",
          }}>
          <Image
            onClick={() => navigate(-1)}
            src={BackArrow}
            style={{ height: 15, width: 15, marginLeft: 60, position: 'absolute', cursor: 'pointer' }}
          />


          {/* ----------------------------Front image and label view----------------------------  */}
          <div
            className="text-center align-self-center"
            style={{ marginTop: '200px' }}>

            <Image
              src={params?.img}
              style={{
                width: '250px', height: '300px',
              }}
              className="rounded"
            />

            {/* --------------------This is label view-------------------- */}
            <div
              className='d-flex flex-column'
              style={{ marginTop: '20px' }}>
              <label
                style={{
                  fontSize: '38px',
                  fontWeight: 'bold',
                  color: '#fff'
                }}
              >
                {params?.name}
              </label>
              <label
                style={{
                  fontSize: '24px',
                  color: '#fff'
                }}
              >
                {params?.nickname}
              </label>
              {/* </div> */}
            </div>

          </div>



        </div>







        {/* ------------------------Second half view------------------------  */}
        <div
          className='d-flex flex-column col-7'
          style={{
            padding: 50, paddingTop: 100,
          }}>


          <div className='d-flex flex-row'
            style={{ justifyContent: 'space-between', }}>
            <div
              className='d-flex flex-column'>
              <label
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#18CA75'
                }}
              >
                Portrayed
              </label>
              <label
                style={{
                  fontSize: '20px',
                  color: '#fff',
                  marginTop: 10
                }}
              >
                {params?.portrayed}
              </label>
            </div>

            <div
              className='d-flex flex-row'>
              <Image
                src={BirthDayLogo}
                style={{
                  width: 25, height: 25, alignSelf: 'center'
                }}
              />
              <label
                style={{
                  fontSize: '24 px',
                  fontWeight: '200', alignSelf: 'center',
                  color: '#fff', marginLeft: 20
                }}
              >
                {params?.birthday}
              </label>
            </div>
          </div>



          <div
            className='d-flex flex-column'
            style={{ marginTop: 60 }}>
            <label
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#18CA75'
              }}
            >
              Occupation
            </label>
            {occupation.map((item: any, index: number) => {
              return (
                <label
                  style={{
                    fontSize: '20px',
                    color: '#fff', margin: 5
                  }}>
                  {item}
                </label>
              )
            })}
          </div>


          <div
            className='d-flex flex-column'
            style={{ marginTop: 60 }}>
            <label
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#18CA75'
              }}
            >
              Appeared in
            </label>
            <div style={{ marginTop: 20 }}>
              {params?.appearance.map((item: any, index: number) => {
                return (
                  <label
                    style={{
                      backgroundColor: '#1A1A1A',
                      paddingLeft: 10,
                      paddingRight: 10,
                      fontSize: '20px',
                      color: '#fff', margin: 5
                    }}>
                    Season {item}
                  </label>
                )
              })}
            </div>
            {params?.appearance?.length == 0 &&
              <label
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#fff'
                }} >
                --
              </label>
            }
          </div>


        </div>
      </div>
    </>
  )
}
