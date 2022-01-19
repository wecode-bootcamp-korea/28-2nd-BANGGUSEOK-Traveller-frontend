import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { AuthContext } from '../../Router';

import './NavSidebar.scss';

export default function NavSidebar({
  handleSideBarOpen,
  toggleModal,
  isSideBarOpen,
}) {
  const { userToken } = useContext(AuthContext);

  return (
    <div className={`containerWrapper ${isSideBarOpen ? 'active' : ''}`}>
      <div className="container">
        <div className="sideTopWrapper">
          <div className="sideTopBox">
            <div className="sideTopLeft">
              <span>English</span>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/99932A345B922C091A"
                alt="UK"
                width={15}
                height={15}
              />
            </div>
            <div className="sideTopRight">
              <strong onClick={handleSideBarOpen}>Close</strong>
              <FontAwesomeIcon icon={faTimes} onClick={handleSideBarOpen} />
            </div>
          </div>
          <ul className="links">
            {SIDE_DATA.map((list, index) => {
              return index === 0 ? (
                !userToken && (
                  <li
                    key={list.id}
                    onClick={() => {
                      toggleModal();
                      handleSideBarOpen();
                    }}
                  >
                    <a href="#!">{list.content}</a>
                  </li>
                )
              ) : (
                <li key={list.id}>
                  <a href={list.address}>{list.content}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bottomBox">
          <span>Enable Dark Mode</span>
        </div>
      </div>
    </div>
  );
}

const SIDE_DATA = [
  { id: 1, content: 'Register / log in', address: '' },
  { id: 2, content: 'Home', address: '/' },
  { id: 3, content: 'Winners', address: '/Filter' },
  { id: 4, content: 'Nominess', address: '/Filter' },
  { id: 5, content: 'Collections', address: '/Filter' },
  { id: 6, content: 'Academy', address: '/Filter' },
];
