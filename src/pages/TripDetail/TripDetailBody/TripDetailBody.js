import React from 'react';
import TripCard from '../../../components/TripCard/TripCard';
import TripDetailBodyDescription from './TripDetailBodyDescription/TripDetailBodyDescription';
import { TripDetailBodyDiv } from './TripDetailBodyStyles';

export default function TripDetailBody() {
  const cardMockData = {
    product_id: 1,
    product_name: 'Azzerad Studios',
    main_image:
      'https://assets.awwwards.com/awards/media/cache/optimize/submissions/2021/11/61a601ba764bb211993959.png',
    created_at: '2022년 1월 18일',
    user: 'user2',
  };
  return (
    <TripDetailBodyDiv>
      <TripCard listItem={cardMockData} />
      <TripDetailBodyDescription />
    </TripDetailBodyDiv>
  );
}
