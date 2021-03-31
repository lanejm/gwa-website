import React from "react";
// import { FaBars } from "react-icons/fa";
// import { links } from "./data";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import "../../App.css";

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
            <div class="buttons">
              <a class="button is-primary is-outlined">Resident Login</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
