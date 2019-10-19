import React from 'react'
import "./HeaderComponent.css"


function HeaderComponent(){
    return (
        <div className="header-container">
            <div className="dropdown-container">
                <select>
                    <option>EN</option>
                </select>
                <select>
                    <option>USD</option>
                </select>
            </div>
            <div className="profile-item-search">
                <div className="profile">
                    <img className="user-image" src={require("../assets/image/user.png")} alt="user" />
                    <p className="my-profile">My profile</p>
                </div>
                <div className="items">
                    <img className="item-image" src={require("../assets/image/shopping-bag.png")} alt="item" />
                    <p className="my-item">0 Items <span className="item-price">$0.00</span></p>
                </div>
                <div className="search">
                    <img className="search-image" src={require("../assets/image/search.png")} alt="search" />
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent