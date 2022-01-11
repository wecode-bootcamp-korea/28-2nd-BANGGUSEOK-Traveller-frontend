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
    > div {
      opacity: 1;
    }

    ${TripCardGelleryImg} {
      transform: scale(1.2);
      transition: transform 0.5s ease;
    }
  }

  > div {
    opacity: 0;
  }
`;

const TripCardGellerySocial = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
`;

// RadiusButton merge 후 버튼이 잘 나타나지 않을 경우 참고하기위해 주석처리
// const TripCardGelleryCollect = styled.div`
//   position: absolute;
//   padding: 10px;
//   right: 20px;
//   top: 20px;
//   border-radius: 20px;
//   border: 1px solid #fff;
// `;

// const TripCardGelleryVote = styled.div`
//   z-index: 1;
//   padding: 15px;
//   border-radius: 40px;
//   background: #fff;
//   color: #000;
// `;

const TripCardGelleryShare = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #fff;
`;

const TripCardDescription = styled.section`
  padding: 20px;
`;

const TripCardDescriptionTitle = styled.p`
  margin-bottom: 25px;
  font-size: 14px;
`;

const TripCardDescriptionLocation = styled.p`
  position: relative;
  margin-bottom: 26px;
  font-size: 14px;
`;

const TripCardDescriptionDate = styled.span`
  position: absolute;
  right: 0;
`;

const TripCardDescriptionAuthor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #f5f7f6;
  background: white;
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
  TripCardGelleryShare,
  TripCardDescriptionTitle,
  TripCardDescriptionLocation,
  TripCardDescriptionDate,
  TripCardDescriptionAuthor,
  TripCardDescriptionAuthorUserId,
};
