import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faShare,
  faShareAlt,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const BUTTONTYPE_OBJ = {
  VisitSite: 'fillColor',
  Collect: 'hoverEffect',
};

const buttonBodyContent = buttonType => {
  switch (buttonType) {
    case 'faceBookIcon':
      return <FontAwesomeIcon icon={faFacebookF} />;
    case 'heartIcon':
      return <FontAwesomeIcon icon={faHeart} />;
    case 'twitterIcon':
      return <FontAwesomeIcon icon={faTwitter} />;
    case 'painterestIcon':
      return <FontAwesomeIcon icon={faPinterestP} />;
    case 'linkedinIcon':
      return <FontAwesomeIcon icon={faLinkedinIn} />;
    case 'shareIcon':
      return <FontAwesomeIcon icon={faShareAlt} />;
    case 'siteIcon':
      return <FontAwesomeIcon icon={faShare} />;
    case 'leftIcon':
      return <FontAwesomeIcon icon={faChevronLeft} />;
    case 'rightIcon':
      return <FontAwesomeIcon icon={faChevronRight} />;
    default:
      return buttonType;
  }
};

export default function RadiusButton({ buttonType }) {
  return (
    <Components propColor={buttonType} className={BUTTONTYPE_OBJ[buttonType]}>
      {buttonBodyContent(buttonType)}
    </Components>
  );
}

const Components = styled.button`
  color: ${props => {
    return props.propColor.includes('Icon') ? 'white' : 'black';
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 0 10px;
  height: 30px;
  width: 30px;
  border: 1px solid #fcfcfc;
  border-radius: ${props => {
    return props.propColor.includes('Icon') ? '50%' : '34px';
  }};
  border-color: ${props => {
    return props.propColor.includes('Icon') ? 'white' : '#202121';
  }};
  background-color: transparent;
  color: #fff;

  &:hover {
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  &.fillColor {
    color: #fcfcfc;
    border-color: #49c5b6;
    background-color: #49c5b6;
    width: 80px;
    &:hover {
      opacity: 0.8;
      transition: all 0.3s ease;
    }
  }

  &.hoverEffect {
    transition: all 0.3s ease;
    background-color: transparent;
    border-color: #fcfcfc;
    color: #fcfcfc;
    width: 80px;
    &:hover {
      color: #49c5b6;
      border-color: #49c5b6;
    }
  }

  &.white {
    border-color: #fcfcfc;
    color: #fcfcfc;
  }
`;
