import React from 'react'
import { FaFacebookF,FaTwitter,FaPinterest,FaInstagram,FaTelegram,FaPlay } from 'react-icons/fa'; 

const footer = () => {
    return (
        <div>
             <div className="site-footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-sm-10 mb-4">
                        <div className="mb-5">
                            <a href="index.html" className="custom-logo-link" rel="home">
                                <img width="300" height="72" src="./img/logo.png" className="custom-logo" alt="Amike"/>
                            </a>
                        </div>
                        <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="footer-social">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#"><i ><FaFacebookF/> </i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><FaTwitter/></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><FaInstagram/></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><FaPinterest/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-text text-center">Copyright © 2020 <a href="#">Ami.Ke</a> All Rights Reserved by ThemeBing.</div>
        </div>
    )
}

export default footer
