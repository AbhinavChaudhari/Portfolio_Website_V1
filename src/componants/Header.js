import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebook,FaTwitter,FaPinterest,FaInstagram,FaTelegram,FaPlay } from 'react-icons/fa';


const Header = () => {
    return (
        <header className="Header">
            <div className="banner section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-7">
                    <ul className="list-inline social">
                        <li className="list-inline-item"><a href="#"><FaFacebook/></a></li>
                        <li className="list-inline-item"><a href="#">< FaTwitter/></a></li>
                        <li className="list-inline-item"><a href="#"><FaPinterest/></a></li>
                        <li className="list-inline-item"><a href="#"><FaInstagram/></a></li>
                        <li className="list-inline-item"><a href="#"><FaTelegram/></a></li>
                    </ul>
                    <div className="align-middle">
                        <h1>I am Abhinav Chaudhary</h1>
                        <p>i,m Abhinav,  Full Stack developer with long time experience in this field​</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#portfolio">My Portfolio </a></li>
                            <li className="list-inline-item"><a className="play-btn popup-video" href="https://www.youtube.com/watch?v=JI2r_WVRucU"><FaPlay/>
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about_me_image wow fadeInUp" data-wow-delay="0.2s" >
                        <img width="508" height="729" src="./img/man.png" className="attachment-full size-full" alt="about me image" /> </div>
                </div>
            </div>
        </div>
    </div>
            
        </header>
    )
}

export default Header
