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

  const { height } = useWindowDimensions();


  const { charList } = useSelector((state: any) => state.mainReducer);

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
    width: '250px', height: '320px',
  }

  const otherImages = {
    width: '150px', height: '200px',
    marginRight: 40
  }

  const nameView = {
    marginTop: '20px'
  }

  const nameStyle = {
    fontSize: '58px',
    fontWeight: '700',
    color: '#fff'
  }

  const nicknameStyle = {
    fontSize: '32px',
    color: '#fff',
    fontWeight: '300',
  }

  const secondHalfView = {
    padding: 50, paddingTop: 100,
  }

  const portrayedView = {
    justifyContent: 'space-between',
  }


  const lableStyle = {
    fontSize: '24px',
    fontWeight: '500',
    color: '#18CA75'
  }

  const subLabelStyle = {
    fontSize: '20px',
    color: '#fff',
    fontWeight: '300',
    marginTop: 10
  }



  const bdayImage = {
    width: 25, height: 25, alignSelf: 'center'
  }
  const bdayLogo = {
    fontSize: '24px',
    fontWeight: '300',
    alignSelf: 'center',
    color: '#fff', marginLeft: 20
  }



  const occupationView = { marginTop: 60 }
  const occupationLabel = {
    fontSize: '24px',
    fontWeight: '500',
    color: '#18CA75'
  }
  const occupationSubLabel = {
    fontSize: '20px',
    fontWeight: '300',
    color: '#fff', margin: 5
  }


  const seasonView = { marginTop: 20 }
  const seasonText = {
    backgroundColor: '#1A1A1A',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: '20px',
    fontWeight: '300',
    color: '#fff', margin: 5
  }



  const otherCharView = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#fff'
  }
  const otherNameView = {
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff', marginTop: 10
  }
  const otherNickNameView = {
    fontSize: '14px',
    fontWeight: '300',
    color: '#fff',
  }

  return (
    <>
      <div className='Detail font-link'>
        <Image
          src={params?.img}
          className="col-5 col-md-5"
          style={mainView}
        />




        {/* ------------------------First half view------------------------  */}
        <div
          className='d-flex flex-column col-5 '
          style={{
            position: 'absolute',
            left: 0, right: 0, bottom: 0, top: 0, padding: 50,
            backgroundImage: "linear-gradient(to bottom, rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.9), rgba(0, 0, 0, 1))",
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
              style={nameView}>
              <label
                style={nameStyle}
              >
                {params?.name}
              </label>
              <label
                style={nicknameStyle}
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
          style={secondHalfView}>


          <div className='d-flex flex-row'
            style={portrayedView}>
            <div
              className='d-flex flex-column'>
              <label
                style={lableStyle}
              >
                Portrayed
              </label>
              <label
                style={subLabelStyle}
              >
                {params?.portrayed}
              </label>
            </div>

            <div
              className='d-flex flex-row'>
              <Image
                src={BirthDayLogo}
                style={bdayImage}
              />
              <label
                style={bdayLogo}
              >
                {birthday}
              </label>
            </div>
          </div>



          <div
            className='d-flex flex-column'
            style={occupationView}>
            <label
              style={occupationLabel}
            >
              Occupation
            </label>
            {occupation.map((item: any, index: number) => {
              return (
                <label
                  style={occupationSubLabel}>
                  {item}
                </label>
              )
            })}
          </div>


          <div
            className='d-flex flex-column'
            style={occupationView}>
            <label
              style={occupationLabel}
            >
              Appeared in
            </label>
            <div style={seasonView}>
              {params?.appearance.map((item: any, index: number) => {
                return (
                  <label
                    style={seasonText}>
                    Season {item}
                  </label>
                )
              })}
            </div>
            {params?.appearance?.length === 0 &&
              <label
                style={seasonText} >
                --
              </label>
            }
          </div>


          <div
            className='d-flex flex-column'
            style={occupationView}>
            <label
              style={otherCharView}
            >
              Other characters
            </label>
            <div
              className=" d-flex flex-row"
              style={seasonView}>
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
                      style={otherNameView}>
                      {item.name}
                    </label>
                    <label
                      style={otherNickNameView}>
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
