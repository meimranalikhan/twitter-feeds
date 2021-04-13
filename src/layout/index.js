import React from 'react'
import TopBar from "./Topbar"
const Layout = ({children}) => {
    return (
        <div>
            <TopBar/>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Layout
