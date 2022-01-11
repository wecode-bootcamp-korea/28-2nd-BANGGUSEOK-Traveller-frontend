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
  visitsite: 'fillColor',
  collect: 'hoverEffect',
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
  align-items: center;
  padding: 0 10px;
  height: 20px;
  border-radius: 34px;
  border-color: #202121;
  background-color: transparent;

  &:hover {
    color: #49c5b6;
    border-color: #49c5b6;
    transition: all 0.3s ease;
  }

  &.fillColor {
    color: white;
    border-color: #49c5b6;
    background-color: #49c5b6;
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
