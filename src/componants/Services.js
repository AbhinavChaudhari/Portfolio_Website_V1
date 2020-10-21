import React from 'react'
import { FaGithub,FaPlay ,FaCodepen,FaApple,FaVideo,FaSearchPlus } from 'react-icons/fa';

const Services = () => {
    return (
        <div>
            <div id="services" className="section-padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title underline">
                        <span>Services</span>
                        <h2>My Services <span className="span-inline"></span></h2>
                        <p className="title-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="item-service wow fadeInLeft" data-wow-delay="0.2s" >
                        <div className="item-service-icon">
                            <div className="i"> < FaGithub /></div>
                           
                        </div>
                        <div className="item-service-content">
                            <h5>Web Development</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item-service wow fadeInLeft" data-wow-delay="0.4s" >
                        <div className="item-service-icon">
                        <div className="i"> < FaPlay /></div>
                        </div>
                        <div className="item-service-content">
                            <h5>Photography</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item-service wow fadeInLeft" data-wow-delay="0.6s" >
                        <div className="item-service-icon">
                        <div className="i"> < FaCodepen /></div>
                        </div>
                        <div className="item-service-content">
                            <h5>Web Design</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item-service wow fadeInLeft" data-wow-delay="0.8s" >
                        <div className="item-service-icon">
                        <div className="i"> < FaApple /></div>
                        </div>
                        <div className="item-service-content">
                            <h5>App Developing</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item-service wow fadeInLeft" data-wow-delay="1s" >
                        <div className="item-service-icon">
                        <div className="i"> < FaVideo /></div>
                        </div>
                        <div className="item-service-content">
                            <h5>Video Editing</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="item-service wow fadeInLeft" data-wow-delay="1.2s" >
                        <div className="item-service-icon">
                        <div className="i"> < FaSearchPlus /></div>
                        </div>
                        <div className="item-service-content">
                            <h5>SEO Expart</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Services
