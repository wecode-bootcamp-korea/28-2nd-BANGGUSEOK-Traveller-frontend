import React from 'react';
import { TripDetailDiv } from './TripDetailStyles';
import TripDetailHeader from './TripDetailHeader/TripDetailHeader';
import TripDetailBody from './TripDetailBody/TripDetailBody';
import TripDetailVotes from './TripDetailVotes/TripDetailVotes';

export default function TripDetail() {
  return (
    <TripDetailDiv>
      <TripDetailHeader />
      <TripDetailBody />
      <TripDetailVotes />
    </TripDetailDiv>
  );
}
