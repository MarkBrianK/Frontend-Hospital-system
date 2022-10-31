import React, { useState } from "react";
import {MdLocalPharmacy} from 'react-icons/md'
import "../Nav/Nav.css";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Nav = ({ setUser, user }) => {
  console.log(user)
  const navigate = useNavigate()
  const onHandleLogoutClick = () => {
    fetch("/users/signout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        user && setUser(null);
        alert("successfully logged out");
        navigate("/");
      }
    });
  };

  return (
 
          <CDBSidebar textColor="black" backgroundColor="#E9E6E9">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <p>Main Navigation</p>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/pharmacy" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">
                     <p>Pharmacy</p>
                  </CDBSidebarMenuItem>{" "}
                  <br></br>
                </NavLink>
                <NavLink exact to="/doctor" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">
                    <p>Doctor</p>
                  </CDBSidebarMenuItem>
                  <br></br>
                </NavLink>
                <NavLink exact to="/registrar" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">
                    <p>Registrar</p>
                  </CDBSidebarMenuItem>
                  <br></br>
                </NavLink>
                <NavLink exact to="/patient" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">
                    <p>Shift</p>
                  </CDBSidebarMenuItem>
                  <br></br>
                </NavLink>
                <NavLink exact to="/laboratory" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">
                    <p>Laboratory</p>
                  </CDBSidebarMenuItem>
                  <br></br>
                </NavLink>
                <button onClick={onHandleLogoutClick}>Logout</button>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
     
   
  );
};
export default Nav;
