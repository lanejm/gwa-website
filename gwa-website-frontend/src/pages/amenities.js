import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faLeaf,
  faWarehouse,
  faRecycle,
  faSoap,
  faLock,
  faUtensils,
  faTv,
  faTree,
  faDoorClosed,
  faBed,
  faWalking,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import "../App.scss";

const Amenities = () => {
  return (
    <>
      <section class="hero is-info">
        <div class="hero-body">
          <h1 class="title">Property Amenities</h1>
        </div>
      </section>
      <br />
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faTools} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">On-Site Maintenance</div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faLeaf} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Adjacent to 62 Acre Broad Ripple Park</div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faWarehouse} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Covered, secure garage parking</div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faRecycle} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">On-site recycling</div>
            </div>
          </div>
        </div>
        <br />
        <div class="column">
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faSoap} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Laundry Facilities</div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faLock} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Secure access controlled entrance</div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faUtensils} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">
                Delicious Mexican food smells from nearby restaurant--yum!
              </div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faWalking} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">
                Walking distance to several bars and restaurants!
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="hero is-info">
        <div class="hero-body">
          <h1 class="title">Unit Amenities</h1>
        </div>
      </section>
      <br />
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faBed} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Carpeted Bedrooms</div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faTv} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Basic Spectrum Cable Included</div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faDoorClosed} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Large bedroom closets</div>
            </div>
          </div>
        </div>
        <br />
        <div class="column">
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faLock} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Keypad Deadbolt Locks</div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faBoxOpen} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">
                Storage space off of private exterior balcony/terrace
              </div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-image">
              <FontAwesomeIcon icon={faTree} size="3x" />
            </div>
            <div class="card-content">
              <div class="content">Beautiful Forest Views</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;

//style amenities page
