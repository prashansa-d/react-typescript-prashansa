import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import BackArrow from '../assets/backArrow.svg';
import BirthDayLogo from '../assets/bday.svg';
import useWindowDimensions from '../components/GetWindowSize';


export const CharacterDetail = (props: any) => {


  const routes: any = useLocation();
  const navigate = useNavigate();

  const { width, height } = useWindowDimensions();


  const { charList } = useSelector((state: any) => state.mainReducer);
  console.log("🚀 ~ file: CharacterDetail.tsx ~ line 22 ~ CharacterDetail ~ charList", charList)

  const otherCharacters = charList.slice(0, 3);


  const params = routes?.state?.data;
  const occupation = routes?.state?.data?.occupation;
  const birthday: string = moment(params?.birthday).format("Do-MMM-YY");;


  const mainView = {
    height: height
  };
  const middleImgView = {
    marginTop: '200px'
  };
  const middleImg = {
    width: '250px', height: '300px',
  }

  const otherImages = {
    width: '150px', height: '200px',
    marginRight: 40
  }

  return (
    <>
      <div className='Detail'>
        <Image
          src={params?.img}
          className="col-5 col-md-5"
          style={mainView}
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
            style={middleImgView}>

            <Image
              src={params?.img}
              style={middleImg}
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
                  fontSize: '24px',
                  fontWeight: '200', alignSelf: 'center',
                  color: '#fff', marginLeft: 20
                }}
              >
                {birthday}
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


          <div
            className='d-flex flex-column'
            style={{ marginTop: 60 }}>
            <label
              style={{
                fontSize: '26px',
                fontWeight: '600',
                color: '#fff'
              }}
            >
              Other characters
            </label>
            <div
              className=" d-flex flex-row"
              style={{ marginTop: 20, flexWrap: 'wrap' }}>
              {otherCharacters.map((item: any, index: number) => {
                return (
                  <div
                    className=" d-flex flex-column"
                  >
                    <Image
                      src={item.img}
                      style={otherImages}
                      className="rounded"
                    />
                    <label
                      style={{
                        fontSize: '20px',
                        color: '#fff', margin: 5
                      }}>
                      {item.name}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
