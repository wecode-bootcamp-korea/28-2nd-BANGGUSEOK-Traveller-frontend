import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import VoteCards from './VoteCards/VoteCards';
import {
  TripDetailBodyDescriptionDiv,
  TripDetailBodyDescriptionImpressionOnPicture,
  TripDetailBodyDescriptionIntentToVisit,
  TripDetailBodyDescriptionSensibility,
  VoteNow,
  TripDetailBodyDescriptionVote,
  TripDetailBodyDescriptionInfo,
  TripDetailBodyDescriptionTags,
  TripDetailTagName,
  TripDetailTagNameWrapper,
  TripDetailCustomHr,
} from './TripDetailBodyDescriptionStyles';
import { useEffect } from 'react/cjs/react.development';

export default function TripDetailBodyDescription({
  detailData,
  votesData,
  setVotesData,
}) {
  const [voteProgressed, setVoteProgressed] = useState(false);
  const [scoreTable, setScoreTable] = useState({
    sensibility: 0,
    intent_to_visit: 0,
    impression_on_picture: 0,
  });
  const [voteFinished, setVoteFinished] = useState(false);
  const location = useLocation();
  const needVotePath = location.pathname.includes('nominees');
  const detailId = location.pathname.split('/')[2];
  const handleVaoteStarted = () => {
    localStorage.getItem('bangguseokToken') && !voteProgressed
      ? setVoteProgressed(true)
      : alert('로그인부터 해주시기 바랍니다!');
  };

  const updateIndex = buttonIndex => {
    if (!scoreTable.sensibility) {
      setScoreTable({ sensibility: buttonIndex });
      return;
    }
    if (!scoreTable.intent_to_visit) {
      setScoreTable({
        sensibility: scoreTable.sensibility,
        intent_to_visit: buttonIndex,
      });
      return;
    }
    if (!scoreTable.impression_on_picture) {
      setScoreTable({
        product_id: detailId,
        sensibility: scoreTable.sensibility,
        intent_to_visit: scoreTable.intent_to_visit,
        impression_on_picture: buttonIndex,
      });
      return;
    }
  };

  const updateVote = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/votes`, {
      method: 'POST',
      body: JSON.stringify(scoreTable),
      headers: {
        Authorization: localStorage.getItem('bangguseokToken'),
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'ALREADY_VOTED') alert('이미 투표하셨습니다.');
      });
    setVoteFinished(true);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/products/${detailId}`)
      .then(res => res.json())
      .then(data => setVotesData(data.result.vote_data));
  }, [detailId, setVotesData, voteFinished]);

  return (
    <TripDetailBodyDescriptionDiv>
      {detailData.tag && (
        <>
          {needVotePath ? (
            <div>
              <VoteNow
                onClick={updateVote}
                style={!voteFinished ? { background: '#FF4E4E' } : null}
              >
                {voteFinished ? 'THANK YOU!!!' : 'CONFIRM YOUR VOTE'}
              </VoteNow>
              {!scoreTable.impression_on_picture && (
                <TripDetailBodyDescriptionImpressionOnPicture>
                  impression_on_picture
                </TripDetailBodyDescriptionImpressionOnPicture>
              )}
              {!scoreTable.intent_to_visit && (
                <TripDetailBodyDescriptionIntentToVisit>
                  intent_to_visit
                </TripDetailBodyDescriptionIntentToVisit>
              )}
              {!scoreTable.sensibility && (
                <TripDetailBodyDescriptionSensibility>
                  sensibility
                </TripDetailBodyDescriptionSensibility>
              )}
              {!voteProgressed && (
                <VoteNow onClick={handleVaoteStarted}>VOTE NOW</VoteNow>
              )}
              {voteProgressed && !scoreTable.impression_on_picture && (
                <TripDetailBodyDescriptionVote>
                  <VoteCards updateIndex={updateIndex} />
                </TripDetailBodyDescriptionVote>
              )}
            </div>
          ) : (
            <TripDetailCustomHr />
          )}
          <TripDetailBodyDescriptionInfo>
            {detailData.description}
          </TripDetailBodyDescriptionInfo>
          <TripDetailBodyDescriptionTags>
            {detailData.tag.map((singleTag, index) => {
              return (
                <TripDetailTagNameWrapper key={`${singleTag}${index}`}>
                  <TripDetailTagName>{singleTag}</TripDetailTagName>
                </TripDetailTagNameWrapper>
              );
            })}
          </TripDetailBodyDescriptionTags>
        </>
      )}
    </TripDetailBodyDescriptionDiv>
  );
}
