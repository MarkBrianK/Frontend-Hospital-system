import React,{useState} from "react";
import "../Nav/Nav.css"
import 'react-calendar/dist/Calendar.css'
import {  CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu,  CDBSidebarMenuItem} from 'cdbreact';
import { NavLink} from 'react-router-dom';

const Nav = () => {

  const publicUrl = "https://calendar.google.com/calendar/embed?src=kariukimarkbrian%40gmail.com&ctz=UTC"

  return (
  <div >
    <div className="render">
    <div style={{display:'flex', height:'100%',  position:'absolute', overflow:'scroll initial'}}>
<CDBSidebar textColor="black" backgroundColor="#E9E6E9">
    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <p>Main Navigation</p>
    </CDBSidebarHeader>
    <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
            <NavLink exact to="/pharmacy" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">
                    <p>Pharmacy</p>
                </CDBSidebarMenuItem> <br></br>
            </NavLink>
            <NavLink exact to="/doctor" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">
                <p>Doctor</p>
                </CDBSidebarMenuItem><br></br>
            </NavLink>
            <NavLink exact to="/registrar" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">
                    <p>Registrar</p>
                </CDBSidebarMenuItem><br></br>
            </NavLink>
            <NavLink exact to="/patient" activeClassName="activeClicked">
                 <CDBSidebarMenuItem icon="columns">
                     <p>Patient</p>
                </CDBSidebarMenuItem><br></br>
            </NavLink>
            <NavLink exact to="/laboratory" activeClassName="activeClicked">
                 <CDBSidebarMenuItem icon="columns">
                     <p>Laboratory</p>
                </CDBSidebarMenuItem><br></br>
            </NavLink>
        </CDBSidebarMenu>
    </CDBSidebarContent>

</CDBSidebar>
</div>
    </div>
</div>
  );
};
export default Nav;
