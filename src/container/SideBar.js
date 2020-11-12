import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './SideBar.css'
import SideBarData from './SidebarData'

function SideBar() {
    const [sidebar, setsidebar] = useState(false)

    const showsiderbar = () => {
        setsidebar(!sidebar)
    }
    return (
        <>
            <div className="sidebar">
                <Link className="menubar" to="#">
                    <FaBars onClick={() => showsiderbar()} />

                </Link>
                <div className="profile-logout">
                <Link to="/userprofile" className="logout">User Profile</Link> &nbsp;&nbsp;|
                <Link to="/logout" className="logout">Logout</Link>
                </div>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-item" onClick={() => showsiderbar()}>
                    <li className="navbar-toggle">
                        <Link className="menubar" to="#">  <AiOutlineClose /></Link>
                    </li>

                    {SideBarData.map((item, index) => {
                        return (
                            <li
                                key={index} className={item.cName} >
                                <Link to={item.path}>
                                    {item.icons}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>

        </>
    )
}

export default SideBar
