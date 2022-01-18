import React, { useState } from 'react';
import NavSidebar from './NavSidebar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

export default function Nav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className={`sideWrapper ${isSideBarOpen ? 'active' : ''}`}>
      <NavSidebar handleSideBarOpen={handleSideBarOpen} />
      <div className={`navWrapper ${isSideBarOpen ? 'active' : ''}`}>
        <div className="firstNav">
          <strong>ENGLISH</strong>
          <p>The awards of design, creativity and innovation on the internet</p>
          <div className="firstNavIcons">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </div>
        <header className="secondNav">
          <div className="secondNavLeftBox" onClick={handleSideBarOpen}>
            <FontAwesomeIcon icon={faBars} />
            menu
          </div>
          <div className="secondNavRightBox">
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
              <div className="btnClose" onClick={handleSearchOpen}>
                X
              </div>
            </div>
          </div>
          <div className="logo" onClick={goToMain}>
            BANGGUSEOK Traveller
          </div>
        </header>
      </div>
    </div>
  );
}
