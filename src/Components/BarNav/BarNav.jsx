import React from "react";
import './BarNav.css';

function BarNav() {
    return (
        <div className="containerBarNav">
            <div className="cotainerNav">
                <img src="./" alt="logo" className="logo"/>
                <nav>
                    <h2>Home</h2>
                    <h2>Saves</h2>
                    <h2>Perfil</h2>
                    <h2>Config</h2>
                </nav>

                <div>more</div>
            </div>
            <div className="divisor"></div>
        </div>
    );
}

export default BarNav;