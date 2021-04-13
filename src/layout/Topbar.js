import React from 'react'
import {Link} from "react-router-dom"
const Topbar = () => {

    const handleClick=()=>{
        window.scroll(0,0)
    }
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="list-item"><Link to="/handle/@POTUS" onClick={handleClick} className="nav-link"> @POTUS</Link></li>
                <li className="list-item"><Link to="/handle/@elonmusk" onClick={handleClick} className="nav-link">@elonmusk</Link></li>
            </ul>
        </nav>
    )
}

export default Topbar
