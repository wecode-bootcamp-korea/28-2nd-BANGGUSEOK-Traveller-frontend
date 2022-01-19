import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TripDetailDiv } from './TripDetailStyles';
import TripDetailHeader from './TripDetailHeader/TripDetailHeader';
import TripDetailBody from './TripDetailBody/TripDetailBody';
import TripDetailVotes from './TripDetailVotes/TripDetailVotes';

export default function TripDetail() {
  const params = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetch(`http://e4c2-211-106-114-186.ngrok.io/products/16`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrYWthb19pZCI6MjA3NTI2NzExNn0.wHB8CFA5RYIDVJoayvq_7vrNcC4oblpC9wH1C4GTf2I',
      },
    })
      .then(res => res.json())
      .then(data => {
        setDetailData(data.result);
        console.log(detailData);
      });
  }, []);

  return (
    <TripDetailDiv>
      <TripDetailHeader user={detailData.user} />
      <TripDetailBody detailData={detailData} />
      <TripDetailVotes />
    </TripDetailDiv>
  );
}
