import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/logo.png";
import City from "../../assets/city.jpg";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";


const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    // console.log(window.pageYOffset)
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false:true);
        return ()=> (window.onscroll == null);
    }
    // console.log(isScrolled) //check scrolling or not

  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt=" " />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Notifications className="icon"/>
          <img src={City} alt="" />

          <div className="profile">
              <ArrowDropDown className="icon"/>
              <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
              </div>
              </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
