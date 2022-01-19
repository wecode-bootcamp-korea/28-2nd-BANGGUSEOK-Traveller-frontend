import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { atomUserToken } from '../../atom/users';
import { useRecoilState } from 'recoil';

import useScrollbarToggle from './hook/useScrollbarToggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

import NavSidebar from './NavSidebar';
import Modal from '../Modal/Modal';
import KakaoLogin from '../Kakao/KakaoLogin';
import kakaoLogout from '../Kakao/kakaoLogout';

import './Nav.scss';

export default function Nav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userToken, setUserToken] = useRecoilState(atomUserToken);

  useScrollbarToggle(isSideBarOpen);
  useScrollbarToggle(isModalOpen);

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const goToMain = () => {
    navigate('/');
  };

  const logout = () => {
    kakaoLogout();
    localStorage.removeItem('bangguseokToken');
    setUserToken('');
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        children={<KakaoLogin />}
      />

      <NavSidebar
        handleSideBarOpen={handleSideBarOpen}
        toggleModal={toggleModal}
        isSideBarOpen={isSideBarOpen}
      />

      <div className={`firstNav ${isSideBarOpen ? 'active' : ''}`}>
        <strong>ENGLISH</strong>
        <p>The awards of design, creativity and innovation on the internet</p>
        <div className="firstNavIcons">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </div>
      <header className={`secondNav ${isSideBarOpen ? 'active' : ''}`}>
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
            {!userToken ? (
              <strong onClick={toggleModal}>REGISTER / LOG IN</strong>
            ) : (
              <strong onClick={logout}>LOGOUT</strong>
            )}
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
    </>
  );
}
