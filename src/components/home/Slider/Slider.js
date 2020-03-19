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
                <p>Ayovest hadir sebagai medium kolaborasi untuk satu visi yang sama. Kami percaya bahwa kesempatan untuk berkontribusi kepada bangsa adalah milik semua orang. </p>
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
