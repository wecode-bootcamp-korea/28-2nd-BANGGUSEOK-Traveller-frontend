import React, { useState, useEffect } from 'react';
import { TripListDiv } from './TripListStyles';
import MainVisual from './MainVisual/MainVisual';
import ListDisplay from './ListDisplay/ListDisplay';

export default function TripList() {
  const [tripLists, setTripLists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/tripListMockData.json')
      // fetch('http://040a-211-106-114-186.ngrok.io/products')
      .then(res => res.json())
      .then(data => {
        setTripLists(data);
        // setTripLists(data.result);
      });
  }, []);

  return (
    <TripListDiv>
      <MainVisual mainVisualData={tripLists[0]} />
      <ListDisplay tripLists={tripLists} />
    </TripListDiv>
  );
}
