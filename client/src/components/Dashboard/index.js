import React, { useState} from 'react';
import './style.css';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter,SidebarContent, } from "react-pro-sidebar";
  import { FaList, FaRegHeart } from "react-icons/fa";
  import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
  import { RiPencilLine } from "react-icons/ri";
  import { BiCog } from "react-icons/bi";
  import { FaUser } from "react-icons/fa";

const Dashboard = () => {
      
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
        // switching menu collapse between true or false depending on state
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      };


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
                                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                            </Menu>
                        </SidebarFooter>
                        </ProSidebar>
                    </div>
                </div>
                <div className="col-sm-8">
                       <div className="dashboard">
                            <div className="stats">
                                    <h1 className="head"> Stats will go here up top</h1>
                            </div>
                            <div className="todays-plan">
                                 <div className="meals">
                                     breakfast 
                                 </div>
                            </div>
                            <div className="upcoming">
                                 <div className="upcoming">
                                      <h1>Upcoming meals</h1>
                                 </div>
                            </div>
                            <div className="favorites">
                                 <div className="favorites">
                                      <h1>Best meals</h1>
                                 </div>
                            </div>
                       </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;