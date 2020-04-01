import React from 'react'
import '../Slider/Slider.scss'

export default function Slider() {
    return (
        <div>
            <div className="container__photo">
                <div className="slide__left">
                <img src={require("../../../asset/image/Rectangle.png")}
                  alt="logo" />
                <h1>Better Investment get sales and profit</h1>
                <p>Ayovest comes as a collaboration media for a common vision. We believe the opportunity to contribute to the nation belongs to everyone. </p>
                <button>Contact Us</button>
                </div>

                <div className="slide__right">
                <img src={require("../../../asset/image/undraw-data.svg")}
                  alt="logo" />
                </div>
            </div>
            
        </div>
    )
}
