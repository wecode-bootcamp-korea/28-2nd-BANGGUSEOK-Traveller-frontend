import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TripListDiv, TripListSkeleton } from './MainStyles';
import MainVisual from './MainVisual/MainVisual';
import ListDisplay from './ListDisplay/ListDisplay';

export default function Main() {
  const [mainVisual, setMainVisual] = useState();
  const [tripLists, setTripLists] = useState();
  const [mainList, setMainList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => {
        setMainVisual(data.result[0]);
        const listOnly = [...data.result];
        listOnly.shift();
        setTripLists(listOnly);
      });

    fetch(`${process.env.REACT_APP_BASE_URL}/products/list`)
      .then(res => res.json())
      .then(data => {
        setMainList(current => {
          const newList = [...current, ...data.result];
          return newList;
        });
      });
  }, [location.search]);

  return (
    <TripListDiv>
      {mainVisual && tripLists && mainList ? (
        <>
          <MainVisual mainVisualData={mainVisual} />
          <ListDisplay tripLists={tripLists} />
          <ListDisplay tripLists={mainList} />
        </>
      ) : (
        <TripListSkeleton />
      )}
    </TripListDiv>
  );
}
