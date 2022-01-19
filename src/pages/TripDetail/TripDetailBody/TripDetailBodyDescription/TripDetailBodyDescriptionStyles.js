import styled from 'styled-components';

const TripDetailBodyDescriptionDiv = styled.div`
  position: relative;
`;

const TripDetailBodyDescriptionImpressionOnPicture = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -70px;
  width: 100%;
  padding: 20px 0;
  background: #3c948b;
  color: #fff;
`;

const TripDetailBodyDescriptionIntentToVisit = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -70px;
  width: 100%;
  padding: 20px 0;
  background: #ecd06f;
  color: #fff;
`;

const TripDetailBodyDescriptionSensibility = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -70px;
  width: 100%;
  padding: 20px 0;
  background: #df6c4f;
  color: #fff;
`;

const VoteNow = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -70px;
  width: 100%;
  padding: 20px 0;
  background: #49c5b6;
  color: #fff;
`;

const TripDetailBodyDescriptionVote = styled.div`
  position: absolute;
  top: -14px;
  width: 100%;
`;

const TripDetailBodyDescriptionInfo = styled.div`
  margin-top: 40px;
  padding: 10px;
`;

const TripDetailBodyDescriptionTags = styled.div`
  display: flex;
  margin: 10px 0;
`;

const TripDetailTagNameWrapper = styled.div`
  width: 100px;

  text-align: center;
  &:nth-child(n + 2) {
    margin-left: 20px;
  }
`;

const TripDetailTagName = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  color: black;
`;

const TripDetailCustomHr = styled.div`
  content: '';
  height: 50px;
  margin-top: 40px;
  background-color: #eeeeee;
`;

export {
  TripDetailBodyDescriptionDiv,
  TripDetailBodyDescriptionImpressionOnPicture,
  TripDetailBodyDescriptionIntentToVisit,
  TripDetailBodyDescriptionSensibility,
  VoteNow,
  TripDetailBodyDescriptionVote,
  TripDetailBodyDescriptionInfo,
  TripDetailBodyDescriptionTags,
  TripDetailTagNameWrapper,
  TripDetailTagName,
  TripDetailCustomHr,
};
