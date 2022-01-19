import styled from 'styled-components';

const TripDetailHeaderDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background: #fff;
`;

const TripDetailHeaderName = styled.span`
  font-weight: 300;
  text-transform: capitalize;
`;

const TripDetailHeaderVoters = styled.div`
  display: flex;
  align-items: center;
`;

const TripDetailHeaderVotersImg = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 5px;
  border-radius: 50%;
`;

const TripDetailHeaderVotersHeart = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 15px;
  margin-right: 5px;
  border: 2.5px solid #202121;
  border-radius: 34px;
`;

export {
  TripDetailHeaderDiv,
  TripDetailHeaderName,
  TripDetailHeaderVoters,
  TripDetailHeaderVotersImg,
  TripDetailHeaderVotersHeart,
};
