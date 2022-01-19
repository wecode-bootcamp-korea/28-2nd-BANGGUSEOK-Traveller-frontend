import React, { useState, useEffect } from 'react';
import { TripListDiv } from './TripListStyles';
import MainVisual from './MainVisual/MainVisual';
import ListDisplay from './ListDisplay/ListDisplay';

export default function TripList() {
  const [mainVisual, setMainVisual] = useState([]);
  const [tripLists, setTripLists] = useState([]);
  const [mainList, setMainList] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3000/data/tripListMockData.json')
    fetch('http://4597-211-106-114-186.ngrok.io/products')
      .then(res => res.json())
      .then(data => {
        // const listOnly = [...data];
        // listOnly.shift();
        // setMainVisual(data[0]);
        // setTripLists(listOnly);
        // setMainList([data[data.length - 1]]);
        // console.log(listOnly);
        console.log(data.result);
        setMainVisual(data.result[0]);
        const listOnly = [...data.result];
        listOnly.shift();
        setTripLists(listOnly);
        // console.log(tripLists);
      });
    fetch('http://4597-211-106-114-186.ngrok.io/products/list')
      .then(res => res.json())
      .then(data => {
        // console.log(data.result);
      });
  }, []);

  return (
    <TripListDiv>
      {/* {tripLists && (
        <>
          <MainVisual mainVisualData={mainVisual} />
          <ListDisplay tripLists={tripLists} />
          <ListDisplay tripLists={mainList} />
        </>
      )} */}
    </TripListDiv>
  );
}
