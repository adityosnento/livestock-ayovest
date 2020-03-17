import React from 'react';
import {connect} from 'react-redux';
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <div className="container">
            <div className="footer-logo">
                <img
                src={require('../../assets/netflix.png')} 
                alt="logo"/>
                <p>Monggovest hadir sebagai medium kolaborasi untuk satu visi yang sama. Kami percaya bahwa kesempatan untuk berkontribusi kepada bangsa adalah milik semua orang. Kami bertekad untuk memberi kesepatan yang sama kepada setiap individu. Dengan satu tujuan, eskalasi produksi peternakan. </p>
            </div>
            <div className="service">
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Service</li>
                    <li>Career</li>
                    <li>Media Center</li>
                </ul>
            </div>
            <div className="container-download">
                <div className="download">
                    <h3>Download</h3>
                    <div className="img-store">
                        <img
                            src={require('../../assets/google-play-badge.svg')} 
                            alt="google play"/>
                        <img
                            className="apple-store"
                             src={require('../../assets/apple-store.svg')} 
                            alt="apple store"/>
                    </div>
                </div>
                <div className="social-media">
                    <h3>Social Media</h3>
                    <img
                        src={require('../../assets/facebook.svg')} 
                        alt="apple store"/>
                    <img
                        src={require('../../assets/instagram.svg')} 
                        className="instagram"
                        alt="apple store"/>
                    <img
                        src={require('../../assets/twitter.svg')} 
                        alt="apple store"/>
                </div>
            </div>
        </div>

    )
}

export default connect()(Footer);