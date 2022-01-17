import React from 'react';
import TripDetailHeader from './TripDetailHeader/TripDetailHeader';
import TripDetailBody from './TripDetailBody/TripDetailBody';
import TripDetailVotes from './TripDetailVotes/TripDetailVotes';

export default function TripDetail() {
  return (
    <div>
      <TripDetailHeader />
      <TripDetailBody />
      <TripDetailVotes />
    </div>
  );
}
