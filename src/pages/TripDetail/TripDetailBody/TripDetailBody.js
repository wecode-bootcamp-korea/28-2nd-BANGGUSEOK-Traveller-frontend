import React from 'react';
import TripCard from '../../../components/TripCard/TripCard';
import TripDetailBodyDescription from './TripDetailBodyDescription/TripDetailBodyDescription';
import { TripDetailBodyDiv } from './TripDetailBodyStyles';

export default function TripDetailBody({ detailData }) {
  return (
    <TripDetailBodyDiv>
      <TripCard listItem={detailData} />
      <TripDetailBodyDescription detailData={detailData} />
    </TripDetailBodyDiv>
  );
}
