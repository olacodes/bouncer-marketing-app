import React from "react"
import goPros from "./goPros.js"
import "./Gopro.css"



function Gopro(){
    return(
            <div className="goPro-container">
                {goPros.map((goPro)=> (
                <div key={goPro.id}
                id={goPro.id}
                className="goPro">
                    <div 
                    
                    className="goPro-header-para">

                        <h4 className="goPro__header">{goPro.name}</h4>
                        <p className="goPro__para">{goPro.description}</p>
                        <p className="goPro__price">{goPro.price}</p>
                    </div>
                   <div 
                        className="goPro__image" style={{ backgroundImage: `url(${goPro.image})`
                        }}>
                    </div>

                    
                </div>

                ))}
                {/* <div className="iphone__text__container">
                    <h4 className="iphone6__header">iPhone 6</h4>
                    <p className="iphone__para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, labor
                    </p>
                    <p className="iphone__price">$399</p>
                </div>
                <div className="iphone6-image-container">
                    <div 
                        className="iphone__6__img" style={{ backgroundImage: `url(${require(`${"../assets/image/iphone6.png"}`)})`, 
                        backgroundPosition: 'top',
                        backgroundSize: "cover",
                        height: '20rem',
                        width: "26rem"}}>
                    </div>
                    
                </div> */}
               
            </div>

            
    )
}

export default Gopro