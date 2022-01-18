import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavSidebar.scss';

export default function NavSidebar({ handleSideBarOpen }) {
  return (
    <div className="containerWrapper">
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
            {SIDE_DATA.map(list => {
              return (
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
