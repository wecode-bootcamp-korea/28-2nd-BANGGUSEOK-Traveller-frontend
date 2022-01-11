import React from 'react';
import './Modal.scss';
import styled from 'styled-components';

export default function Modal({ children }) {
  return (
    <ModalBody>
      <ModalContent>{children}</ModalContent>
      <ModalOff>X</ModalOff>
    </ModalBody>
  );
}

const ModalBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
  width: 30%;
  padding: 50px;
  background-color: #f4f7f6;
`;

const ModalOff = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5000;
  width: 66px;
  height: 70px;
  font-size: 25px;
  border: 1px solid black;
  cursor: pointer;
  background-color: #fcfcfc;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`;
