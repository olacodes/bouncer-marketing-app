import React from 'react';
import { navLinks } from "./bouncer.json"
import "./Bouncer.css"
function Bouncer() {
    return (
        <div className="bouncer-main-container">
            <div className="bouncer-container">
                <h2 className="bouncer">Bouncer</h2>
                <div className="nav-container">
                    {navLinks.map((navLink, index) => (
                        <li key={index}>{navLink}</li>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Bouncer