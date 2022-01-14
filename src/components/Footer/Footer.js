import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="topFooter">
        <div className="topWrapper">
          <div className="topLeftBox">
            <div className="strongBox">
              <strong>
                The awards for design, creativity and innovation on the
                internet.
              </strong>
            </div>
            <ul className="site">
              <li>Web Design Courses</li>
              <li>
                Directory
                <p id="directory">6</p>
              </li>
              <li>
                Jobs
                <p id="jobs">12</p>
              </li>
              <li>About Us</li>
              <li>Winners</li>
              <li>Nominees</li>
              <li>Blog</li>
            </ul>
            <ul className="links">
              {FOOTER_DATA.map(list => {
                return <li key={list.id}>{list.content}</li>;
              })}
            </ul>
          </div>
          <div className="topRightBox">
            <div className="innerBox">
              <span>Next Conferences</span>
              <FontAwesomeIcon icon={faCalendarAlt} />
              <strong>Coming Soon</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="inner">
          <div className="innerLeftBox">
            <ul className="information">
              {FOOTER_INFORMATION.map(list => {
                return <li key={list.id}>{list.content}</li>;
              })}
              <li>
                English
                <img
                  src="https://t1.daumcdn.net/cfile/tistory/99932A345B922C091A"
                  alt="uk"
                  width={15}
                  height={15}
                />
              </li>
            </ul>
          </div>
          <div className="innerRightBox">
            <p>Private Cloud Stackscale</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FOOTER_DATA = [
  { id: 1, content: 'Follow us' },
  { id: 2, content: 'Twitter' },
  { id: 3, content: 'Facebook' },
  { id: 4, content: 'Youtube' },
  { id: 5, content: 'Instagram' },
  { id: 6, content: 'Linkedin' },
];

const FOOTER_INFORMATION = [
  { id: 1, content: 'Contact Us' },
  { id: 2, content: 'F.A.Q' },
  { id: 3, content: 'Cookies Policy' },
  { id: 4, content: 'Legal Terms' },
  { id: 5, content: 'Privacy Policy' },
];
