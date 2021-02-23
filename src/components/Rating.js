
import iconBlue from '../assets/icon-blue.png'
import iconWhite from '../assets/icon-white.png'
import iconYellow from '../assets/icon-yellow.png'
import iconRed from '../assets/icon-red.png'
import verticon from '../assets/vertIcon.png'

import cregital from '../assets/Cregital.png'
import intelia from '../assets/intelia.png'
import imperialsoft from '../assets/imperialsoft.png'
import talosmart from '../assets/talosmart.png'


const Rating = () => {
    return (
        <div className="col-lg-4 rating">
            <div className="satisfaction">
                <h5>Customer Satisfaction</h5>
                <p className="mb-4">Across help desk this month</p>
                <p className="color">Response recieved</p>
                <p className="no">390</p>
                <div className="d-flex justify-content-between mb-3">
                    <p>Positive</p>
                    <p>
                        <img src={iconBlue} alt="blue" />
                        <img src={iconBlue} alt="blue" />
                        <img src={iconBlue} alt="blue" />
                        <img src={iconBlue} alt="blue" />
                        <img src={iconBlue} alt="blue" />
                        <img src={iconBlue} alt="blue" />
                        <img src={iconWhite} alt="white" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="white" />
                    </p>
                    <p>
                        60%
                    </p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <p>Neutral</p>
                    <p>
                        <img src={iconYellow} alt="blue" />
                        <img src={iconYellow} alt="blue" />
                        <img src={iconYellow} alt="blue" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="white" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="white" />
                    </p>
                    <p>
                        60%
                    </p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <p>Negative</p>
                    <p>
                        <img src={iconRed} alt="blue" />
                        <img src={iconRed} alt="blue" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="white" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="White" />
                        <img src={iconWhite} alt="white" />
                    </p>
                    <p>
                        20%
                    </p>
                </div>
            </div>
            <div className="messages mt-4">
                <div className="d-flex mb-3 justify-content-between">
                    <h5>Messages</h5>
                    <a href="#" className="a">+ New message</a>
                </div>
                <div className="box d-flex mt-1 justify-content-between">
                    <div>
                        <div className="d-flex text">
                            <img src={cregital} alt="cregital" />
                            <div>
                                <p>Cregital</p>
                                <p>Hey, don’t forget to clear server cache!25mins ago</p>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <img src={verticon} alt="verticon" />
                    </a>
                </div>
                <div className="box d-flex mt-1 justify-content-between">
                    <div>
                        <div className="d-flex text">
                            <img src={intelia} alt="cregital" />
                            <div>
                                <p>Intelia</p>
                                <p>Hey, don’t forget to clear server cache!25mins ago</p>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <img src={verticon} alt="verticon" />
                    </a>
                </div>
                <div className="box d-flex mt-1 justify-content-between">
                    <div>
                        <div className="d-flex text">
                            <img src={talosmart} alt="cregital" />
                            <div>
                                <p>Talosmart</p>
                                <p>Hey, don’t forget to clear server cache!25mins ago</p>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <img src={verticon} alt="verticon" />
                    </a>
                </div>
                <div className="box d-flex mt-1 justify-content-between">
                    <div>
                        <div className="d-flex text">
                            <img src={imperialsoft} alt="cregital" />
                            <div>
                                <p>Imperialsoft</p>
                                <p>Hey, don’t forget to clear server cache!25mins ago</p>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <img src={verticon} alt="verticon" />
                    </a>
                </div>
                <div className="box d-flex mt-1 justify-content-between">
                    <div>
                        <div className="d-flex text">
                            <img src={cregital} alt="cregital" />
                            <div>
                                <p>Cregital</p>
                                <p>Hey, don’t forget to clear server cache!25mins ago</p>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <img src={verticon} alt="verticon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Rating