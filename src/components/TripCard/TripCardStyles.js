import styled from 'styled-components';

const TripCardDiv = styled.div`
  background: #fff;
`;

const TripCardGelleryImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TripCardGellery = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 292px;
  padding: 20px;
  overflow: hidden;
  background: #000;
  color: #fff;

  &:hover {
    > div,
    button {
      opacity: 1;
    }

    ${TripCardGelleryImg} {
      transform: scale(1.2);
      transition: all 0.5s ease;
      filter: brightness(50%);
    }

    > button {
      z-index: 0;
      color: #fff;
    }
  }

  > button {
    opacity: 0;
  }

  > button:nth-of-type(1) {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  > div {
    opacity: 0;
  }

  > button:last-of-type {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

const TripCardGellerySocial = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;

  > button {
    margin-right: 5px;
  }
`;

const VoteButton = styled.div`
  z-index: 1;
  padding: 15px;
  border-radius: 40px;
  background: #fff;
  color: #000;
`;

const TripCardGelleryShare = styled.div``;

const TripCardDescription = styled.section`
  position: relative;
  padding: 20px;
`;

const TripCardDescriptionTitle = styled.p`
  margin-bottom: 25px;
  font-size: 14px;
`;

const TripCardDescriptionDate = styled.span`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #f5f7f6;
  font-size: 12px;
`;

const TripCardDescriptionAuthor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #f5f7f6;
  font-size: 12px;
`;

const TripCardDescriptionAuthorUserId = styled.strong`
  margin-left: 4px;
`;

export {
  TripCardDiv,
  TripCardGellery,
  TripCardDescription,
  TripCardGelleryImg,
  TripCardGellerySocial,
  VoteButton,
  TripCardGelleryShare,
  TripCardDescriptionTitle,
  TripCardDescriptionDate,
  TripCardDescriptionAuthor,
  TripCardDescriptionAuthorUserId,
};
