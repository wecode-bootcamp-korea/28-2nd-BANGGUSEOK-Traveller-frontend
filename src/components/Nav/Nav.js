import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import './Nav.scss';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <div className="firstNav">
        <strong>ENGLISH</strong>
        <p>The awards of design, creativity and innovation on the internet</p>
        <div className="icons">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </div>
      <header className="secondNav">
        <div className="leftBox">
          <FontAwesomeIcon icon={faBars} />
          menu
        </div>
        <div className="rightBox">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} onClick={handleSearchOpen} />
          </div>
          <div className="itemLogin">
            <span>Are you a member?</span>
            <strong>REGISTER / LOG IN</strong>
          </div>
          <div className="SubmitButton">SUBMIT YOUR SITE!</div>
        </div>
        <div className={`searchContainer ${isSearchOpen ? 'active' : ''}`}>
          <div className="searchBox">
            <input
              type="text"
              placeholder="SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)"
              className="searchInput"
            />
            <div className="filter">
              <strong>SHOW FILTERS</strong>
            </div>
            <div className="btClose" onClick={handleSearchOpen}>
              X
            </div>
          </div>
        </div>
        <div className="logo">BANGGUSEOK Traveller</div>
      </header>
    </>
  );
}
