import React from "react";
import {Link} from 'react-router-dom'
// import { FaBars } from "react-icons/fa";
// import { links } from "./data";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import "../../App.scss";
import Auth from "../Auth/auth";
import { Navbar } from "react-bulma-components";

const Navigate = () => {
  //   const [showLinks, setShowLinks] = useState(false);
  //   const linksContainerRef = useRef(null);
  //   const linksRef = useRef(null);
  //   const toggleLinks = () => {
  //     setShowLinks(!showLinks);
  //   };

  //   useEffect(() => {
  //     const linksHeight = linksRef.current.getBoundingClientRect().height;
  //     if (showLinks) {
  //       linksContainerRef.current.style.height = `${linksHeight}px`;
  //     } else {
  //       linksContainerRef.current.style.height = "0px";
  //     }
  //   }, [showLinks]);
  return (
    <Navbar class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <LogoSvg />
        {/* fix this so text below drop down is closer */}

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a href='/home' class="navbar-item">Home</a>

          <a href='/amenities' class="navbar-item">Amenities</a>

          <a href='/photos' class="navbar-item">Photos</a>

          <a href='/map' class="navbar-item">Map</a>
          

          <a href='/contact' class="navbar-item">Contact</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="dropdown is-active">
              <div class="dropdown-trigger">
                <div
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Resident Login</span>
                  {/* <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span> */}
                </div>
              </div>
              {/* <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">
                    <Auth />  this dropdown needs state to toggle 
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigate;
