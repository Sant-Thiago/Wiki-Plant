import './Header.css'
import { useState } from "react";

function Header() {
    const  [valor, setValor] = useState("");
    return (
        <div className='bodyHeader'>
            <img src="/" alt="Logo" className="ImgClass"/>
            <div className="inputSearch">
                <i className="material-symbols-outlined">
                    search
                </i>
                <input 
                    type="text"
                    value={valor}
                    placeholder="Search your Plant"
                />
            </div>
            <div className="profileClass">
                <img src="./" alt="Profile"/>
            </div>
        </div>
    )
}

export default Header;