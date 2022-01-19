import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TripListDiv } from './MainStyles';
import MainVisual from './MainVisual/MainVisual';
import ListDisplay from './ListDisplay/ListDisplay';

export default function Main() {
  const [mainVisual, setMainVisual] = useState();
  const [tripLists, setTripLists] = useState();
  const [mainList, setMainList] = useState();
  const location = useLocation();

  useEffect(() => {
    fetch('http://4597-211-106-114-186.ngrok.io/products')
      .then(res => res.json())
      .then(data => {
        setMainVisual(data.result[0]);
        const listOnly = [...data.result];
        listOnly.shift();
        setTripLists(listOnly);
      });

    fetch(
      `http://4597-211-106-114-186.ngrok.io/products/list${
        location.search || '?limit=8&offset=8'
      }`
    )
      .then(res => res.json())
      .then(data => {
        setMainList(data.result);
      });
  }, [location.search]);

  return (
    <TripListDiv>
      {mainVisual && tripLists && mainList && (
        <>
          <MainVisual mainVisualData={mainVisual} />
          <ListDisplay tripLists={tripLists} />
          <ListDisplay tripLists={mainList} />
        </>
      )}
    </TripListDiv>
  );
}
