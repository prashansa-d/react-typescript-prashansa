import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App.css';
import BackArrow from '../../assets/backArrow.svg';
import BirthDayLogo from '../../assets/bday.svg';
import { CharacterModal } from '../../interfaces/interface';
import { styles } from './index.styles';


export const CharacterDetail = () => {

  interface Routes {
    data: CharacterModal
  }

  const { state } = useLocation()
  const { data } = state as Routes
  const navigate = useNavigate();



  const { charList } = useSelector((state: any) => state.mainReducer);

  const otherCharacters = charList.slice(0, 3);


  const params = data;
  const occupation = data?.occupation;
  const birthday: string = moment(params?.birthday).format("Do-MMM-YY");;



  return (
    <>
      <div className='Detail font-link'>
        <Image
          src={params?.img}
          className="col-5 col-md-5 object-fit-cover"
          style={styles.mainView}
          id='imgUNcover'
        // className={styles.mainView}
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
            style={styles.middleImgView}>

            <Image
              src={params?.img}
              style={styles.middleImg}
              className="rounded"
              id='imgUNcover'
            />

            {/* --------------------This is label view-------------------- */}
            <div
              className='d-flex flex-column'
              style={styles.nameView}>
              <label
                style={styles.nameStyle}
              >
                {params?.name}
              </label>
              <label
                style={styles.nicknameStyle}
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
          style={styles.secondHalfView}>


          <div className='d-flex flex-row'
            style={styles.portrayedView}>
            <div
              className='d-flex flex-column'>
              <label
                style={styles.lableStyle}
              >
                Portrayed
              </label>
              <label
                style={styles.subLabelStyle}
              >
                {params?.portrayed}
              </label>
            </div>

            <div
              className='d-flex flex-row'>
              <Image
                src={BirthDayLogo}
                style={styles.bdayImage}
              />
              <label
                style={styles.bdayLogo}
              >
                {birthday}
              </label>
            </div>
          </div>



          <div
            className='d-flex flex-column'
            style={styles.occupationView}>
            <label
              style={styles.occupationLabel}
            >
              Occupation
            </label>
            {occupation.map((item: string, index: number) => {
              return (
                <label
                  style={styles.occupationSubLabel}>
                  {item}
                </label>
              )
            })}
          </div>


          <div
            className='d-flex flex-column'
            style={styles.occupationView}>
            <label
              style={styles.occupationLabel}
            >
              Appeared in
            </label>
            <div style={styles.seasonView}>
              {params?.appearance.map((item: number, index: number) => {
                return (
                  <label
                    style={styles.seasonText}>
                    Season {item}
                  </label>
                )
              })}
            </div>
            {params?.appearance?.length === 0 &&
              <label
                style={styles.seasonText} >
                --
              </label>
            }
          </div>


          <div
            className='d-flex flex-column'
            style={styles.occupationView}>
            <label
              style={styles.otherCharView}
            >
              Other characters
            </label>
            <div
              className=" d-flex flex-row"
              style={styles.seasonView}>
              {otherCharacters.map((item: CharacterModal, index: number) => {
                return (
                  <div
                    className=" d-flex flex-column"
                  >
                    <Image
                      src={item.img}
                      style={styles.otherImages}
                      className="rounded"
                    />
                    <label
                      style={styles.otherNameView}>
                      {item.name}
                    </label>
                    <label
                      style={styles.otherNickNameView}>
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




