import React, { useContext } from 'react'
import './PopUp.css'
import closeIcon from '../../assets/images/closeIcon.png'
import { TabSwitchContext } from '../../context/TabSwitcher';

const PopUp = () => {

    const { tabComponent } = useContext(TabSwitchContext);

    const closePopUp = () => {
        document.getElementById('mobilePopUp').classList.remove('openPopup')
    }

    return (
        <div className="popUp-box" id='mobilePopUp'>
            <div className='popUpBox'>
                <div className="closeIcon" onClick={closePopUp}>
                    <img src={closeIcon} alt="" />
                </div>
                <div className="popUpContent">
                    {/* <div className="container"> */}
                    <div className="tab-content current">
                        <div className="tabbing-flex">
                            {tabComponent}
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default PopUp
