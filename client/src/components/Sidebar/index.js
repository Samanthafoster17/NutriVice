import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter,SidebarContent, } from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const Sidebar = (props) => {

    const [menuCollapse, setMenuCollapse] = useState(false);
    // const [authenticated, setAuthenticated] = useState(false);
    const menuIconClick = () => {
        // switching menu collapse between true or false depending on state
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const logout = () =>{
        // Log user out
        // Remove token from local storage
        localStorage.removeItem("decodedTokenID");
        props.history.push("/Signin");
    }
    useEffect(() => {
        const userInfo = localStorage.getItem("decodedTokenID");
        const regToken = localStorage.getItem("regTokenID");
        if(userInfo || regToken) {
            // setAuthenticated(true);
            console.log("welcome");
        } else if (!userInfo){
            // setAuthenticated(false);
            props.history.push("/Signin");
        }
            console.log(userInfo);
    })

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <div id="header" className="sidebar">
                        <ProSidebar collapsed={menuCollapse}>
                        <SidebarHeader >
                            <div className="logo-text">
                                  Menu
                            </div>
                            <div className="closemenu" onClick={menuIconClick}>
                                {/* changing menu collapse icon on click */}
                                {menuCollapse ? (
                                 <FiArrowRightCircle/>
                                ) : (
                                <FiArrowLeftCircle/>
                                )}
                             </div>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square">
                                <MenuItem active={true} icon={<FaUser />}>
                                Profile
                                </MenuItem>
                                <hr></hr>
                                <MenuItem icon={<FaList />}>Meal Plan</MenuItem>
                                <hr></hr>
                                <MenuItem icon={<FaRegHeart />}>Favourites</MenuItem>
                                <hr></hr>
                                <MenuItem icon={<RiPencilLine />}>Stats</MenuItem>
                                <hr></hr>
                                <MenuItem icon={<BiCog />}>Preferences</MenuItem>
                                <hr></hr>
                            </Menu>
                        </SidebarContent>
                        <SidebarFooter>
                            <Menu iconShape="square">
                                <Link  to="#"> <MenuItem icon={<FiLogOut />} type="button"  onClick={logout}>Logout</MenuItem> </Link>
                            </Menu>
                        </SidebarFooter>
                        </ProSidebar>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Sidebar;