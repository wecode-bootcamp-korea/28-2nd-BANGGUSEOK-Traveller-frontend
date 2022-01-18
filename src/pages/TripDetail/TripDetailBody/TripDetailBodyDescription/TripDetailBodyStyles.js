import styled from 'styled-components';

const TripDetailBodyDescriptionDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 20px;
  background: #49c5b6;
  color: #fff;
`;

const TripDetailBodyDescriptionInfo = styled.div`
  padding: 10px;
`;

const TripDetailBodyDescriptionTags = styled.div`
  padding: 10px;

  button {
    display: inline-block;
    margin-right: 10px;
  }
`;

export {
  TripDetailBodyDescriptionDiv,
  TripDetailBodyDescriptionInfo,
  TripDetailBodyDescriptionTags,
};
