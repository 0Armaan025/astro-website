import React from 'react';
import './homepage.css';

const HomePage = () => {

               
    const onClick = () => console.log('hi');

    return (
        <>
            <center>
                <br /><br /><br />
                <div className="nintendoSwitch">

                    <div className="leftSide">

                        <div className="minus_btn">

                        </div>

                        <button className="topButton" onClick={() => console.log("im noob")}>
                            <div className="internalButton" onClick={onClick}></div>
                        </button>

                        <div className="arrowButtons">
                            <button className="topArrowButton">
                                <img src="https://cdn-icons-png.flaticon.com/128/3838/3838683.png" height="20px" width="20px" />
                            </button>
                            <div className="leftAndRightArrowButtons">
                                <button className="leftArrowButton">
                                    <img src="https://cdn-icons-png.flaticon.com/128/271/271220.png" height="15px" width="15px" />
                                </button>
                                <button className="rightArrowButton">
                                    <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" height="15px" width="15px" />
                                </button>
                            </div>

                            <button className="bottomArrowButton">
                                <img src="https://cdn-icons-png.flaticon.com/128/6916/6916826.png" height="20px" width="20px" />
                            </button>
                        </div>

                    </div>
                    <div className="nintendoSwitch__outsideScreen">
                        <div className="nintendoSwitch__screen">
                            <div className="nintendoSwitch__screen__screen">
                            </div>
                        </div>
                    </div>

                    <div className="rightSide">
                        <button className='plus_btn font-black'>+</button>

                        <div className="letterButtons">
                            <button className="topArrowButton">
                                <h3 className='arrowLetter'>X</h3>
                            </button>
                            <div className="leftAndRightArrowButtons">
                                <button className="leftArrowButton">
                                    <h3 className='arrowLetter'>Y</h3>
                                </button>
                                <button className="rightArrowButton">
                                    <h3 className='arrowLetter'>A</h3>
                                </button>
                            </div>

                            <button className="bottomArrowButton">
                                <h3 className='arrowLetter'>B</h3>
                            </button>
                        </div>

                        <br />
                        <div className="righttopButton">
                            <button className="rightinternalButton">
                            </button>
                        </div>

                    </div>
                </div>
            </center>
        </>
    )
}

export default HomePage;
