import React from "react";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import "../../App.scss";
// import Auth from "../Auth/auth"; Auth needed to set up user login. 



document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

const Navigate = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <LogoSvg />
        <a
          href="/home"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="options"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="options" class="navbar-menu">
        <div class="navbar-start">
          <a href="/home" class="navbar-item">
            Home
          </a>

          <a href="/amenities" class="navbar-item">
            Amenities
          </a>

          <a href="/photos" class="navbar-item">
            Photos
          </a>

          <a href="/map" class="navbar-item">
            Map
          </a>

          <a href="/contact" class="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
