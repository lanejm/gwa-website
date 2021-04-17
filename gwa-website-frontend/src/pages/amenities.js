import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faLeaf,
  faWarehouse,
  faRecycle,
  faSoap,
  faLock,
  faUtensils,
  faGlassCheers,
  faTv,
  faTree,
  faDoorClosed,
  faBed,
  faBuilding,
  faWalking,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import "../App.scss";

const Amenities = () => {
  return (
    <>
      <section class="hero is-info">
        <div class="hero-body">
          <h1 class="title">Building Amenities</h1>
        </div>
      </section>
      <div class="columns">
        <div class="column is-half">
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faTools} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">On-Site Maintenance</div>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faLeaf} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Adjacent to 62 Acre Broad Ripple Park</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;

//style amenities page

{
  /* <ul>
<li>On-site maintenance</li>
<li>Adjacent to 62 Acre Broad Ripple Park</li>
<li>Covered, secure garage parking</li>
<li>Located on dead end street, very peaceful!</li>
<li>On-site recycling</li>
<li>Laundry Facilities</li>
<li>Secure Access Controlled Building</li>
<li>
  Delicious Mexican food smells from nearby restaurant--yum!
</li>
<li>Walking distance to several bars and restaurants!</li>
</ul> */
}

{
  /* <ul>
<li>Private Balconies and Terraces</li>
<li>Beautiful Forest Views</li>
<li>Carpeted Bedrooms</li>
<li>Keypad deadbolt locks</li>
<li>Wood Style Flooring</li>
<li>Basic Spectrum Cable Included</li>
<li>Exterior Storage Closet off of Balcony/Terrace</li>
<li>Large Closets</li>
</ul> */
}
