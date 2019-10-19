import React from 'react'
import "./Hero.css"

function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-content">
                <div className="left-arrow">
                    <img className="left__arrow__image" src={require("../assets/image/arrow-left.svg")} alt="left arrow"/>
                </div>
                <div className="iphone-x">
                    <h3 className="iphone__header">iPhone X</h3>
                    <p className="iphone__paragraph">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    <a className="iphone__more" href="http://loremipsum.com">More</a>
                </div>
                <div className="iphone-image">
                    <img className="iphone__image" src={require("../assets/image/Mask-Group-1.png")} alt="left arrow"/>
                </div>
                <div className="right-arrow">
                    <img className="right__arrow__image" src={require("../assets/image/arrow-right.svg")} alt="right arrow"/>
                </div>
            </div>
        </div>
        
    )
    
}

export default Hero