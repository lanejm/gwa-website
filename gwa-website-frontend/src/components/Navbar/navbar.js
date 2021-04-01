import React from "react";
// import { FaBars } from "react-icons/fa";
// import { links } from "./data";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import "../../App.css";
import Auth from "../Auth/auth"

const Navbar = () => {
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
    <nav class="navbar" role="navigation" aria-label="main navigation">
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
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Amenities</a>

          <a class="navbar-item">Photos</a>

          <a class="navbar-item">Map</a>

          <a class="navbar-item">Contact</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="dropdown is-active">
            <div class="dropdown-trigger">
              <button
                class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Resident Login</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  <Auth />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
