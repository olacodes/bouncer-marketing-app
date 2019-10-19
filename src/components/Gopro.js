import React from "react"
import "./Gopro.css"

function Gopro(){
    return(
        <div className="container">
            <div className="iphone-6">
                <div className="iphone__text__container">
                    <h4 className="iphone6__header">iPhone 6</h4>
                    <p className="iphone__para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, labor
                    </p>
                    <p className="iphone__price">$399</p>
                </div>
                <div className="iphone6-image-container">
                    {/* <img className="iphone__6__img" src={require("../assets/image/iPhone6s_discover_desktop_08_iOS9-1.png")} alt="iphone-6"/> */}
                </div>
                <div style={{ backgroundImage: `url(require("../assets/image/iPhone6s_discover_desktop_08_iOS9-1.png"))` }}>ihdosfcjsdpo</div>
            </div>
        </div>
    )
}

export default Gopro