import React from 'react'
import '../Slider/Slider.scss'

export default function Slider() {
    return (
        <div>
            <div className="container__photo">
                <img src={require("../../../assets/farm.jpg")}
                  alt="logo" />
                <h1>WELCOME TO OUR WEBSITE</h1>
                <p>Monggovest hadir sebagai medium kolaborasi untuk satu visi yang sama. Kami percaya bahwa kesempatan untuk berkontribusi kepada bangsa adalah milik semua orang. Kami bertekad untuk memberi kesepatan yang sama kepada setiap individu. Dengan satu tujuan, eskalasi produksi peternakan.</p>
            </div>
            
        </div>
    )
}
