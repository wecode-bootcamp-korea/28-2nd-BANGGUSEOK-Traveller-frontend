import React from 'react';
import TripCard from '../../../components/TripCard/TripCard';
import TripDetailBodyDescription from './TripDetailBodyDescription/TripDetailBodyDescription';
import {
  TripDetailBodyDiv,
  TripDetailSubImage,
  SubImageContainer,
} from './TripDetailBodyStyles';

export default function TripDetailBody({
  detailData,
  votesData,
  setVotesData,
}) {
  return (
    <TripDetailBodyDiv>
      <TripCard listItem={detailData} />
      <TripDetailBodyDescription
        detailData={detailData}
        votesData={votesData}
        setVotesData={setVotesData}
      />
      <SubImageContainer>
        {detailData.sub_image[0] !== '' &&
          detailData.sub_image.map(item => {
            return <TripDetailSubImage src={item} key={item} alt="dummy" />;
          })}
      </SubImageContainer>
    </TripDetailBodyDiv>
  );
}
