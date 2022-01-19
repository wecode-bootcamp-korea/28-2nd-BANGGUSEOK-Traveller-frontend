import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TripDetailSkeleton, TripDetailWrapper } from './TripDetailStyles';
import TripDetailHeader from './TripDetailHeader/TripDetailHeader';
import TripDetailBody from './TripDetailBody/TripDetailBody';
import TripDetailVotes from './TripDetailVotes/TripDetailVotes';

export default function TripDetail() {
  const params = useParams();
  const [detailData, setDetailData] = useState({});
  const [votesData, setVotesData] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setDetailData(data.result.product_data);
        setVotesData(data.result.vote_data);
      });
  }, [params.id]);

  return (
    <TripDetailWrapper>
      {votesData ? (
        <>
          <TripDetailHeader user={detailData.user} />
          <TripDetailBody
            detailData={detailData}
            votesData={votesData}
            setVotesData={setVotesData}
          />
          <TripDetailVotes votesData={votesData} />
        </>
      ) : (
        <TripDetailSkeleton />
      )}
    </TripDetailWrapper>
  );
}
