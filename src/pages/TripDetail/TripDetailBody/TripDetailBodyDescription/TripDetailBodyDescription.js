import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import RadiusButton from '../../../../components/Buttons/RadiusButton';
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
} from './TripDetailBodyDescriptionStyles';

const locationPathObj = {
  winners: false,
  nominees: true,
};

export default function TripDetailBodyDescription({ detailData }) {
  const [voteProgressed, setVoteProgressed] = useState(false);
  const [scoreTable, setScoreTable] = useState({
    sensibility: 0,
    intent_to_visit: 0,
    impression_on_picture: 0,
  });
  const [voteFinished, setVoteFinished] = useState(false);

  const location = useLocation();
  const needVotePath = locationPathObj[location.pathname];

  const handleVaoteStarted = () => {
    // todo : 토큰잇는지 확인하고 없으면 얼럿 분기하기
    if (!voteProgressed) setVoteProgressed(true);
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
        sensibility: scoreTable.sensibility,
        intent_to_visit: scoreTable.intent_to_visit,
        impression_on_picture: buttonIndex,
      });
      return;
    }
  };

  // todo : product_id 변수로 설정해서 요청 보내기
  const updateVote = () => {
    fetch('http://10.58.2.141:8000/votes', {
      method: 'POST',
      body: JSON.stringify(scoreTable),
      // todo : 토큰 불러와서 요청하기
      // headers: {
      //   Authorization:
      //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjA3NTI2NzExNn0.G4KjibcU52vIVowWHdxx5hnYnI_GNRychwXrXWcsyIw',
      // },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'ALREADY_VOTED') alert('이미 투표하셨습니다.');
      });
    setVoteFinished(true);
  };

  return (
    <TripDetailBodyDescriptionDiv>
      {detailData.tag && (
        <>
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
            {!voteProgressed && needVotePath && (
              <VoteNow onClick={handleVaoteStarted}>VOTE NOW</VoteNow>
            )}
            {voteProgressed && !scoreTable.impression_on_picture && (
              <TripDetailBodyDescriptionVote>
                <VoteCards updateIndex={updateIndex} />
              </TripDetailBodyDescriptionVote>
            )}
          </div>
          <TripDetailBodyDescriptionInfo>
            {detailData.description}
          </TripDetailBodyDescriptionInfo>
          <TripDetailBodyDescriptionTags>
            {detailData.tag.map((singleTag, index) => {
              return <RadiusButton key={index} buttonType={singleTag} />;
            })}
          </TripDetailBodyDescriptionTags>
        </>
      )}
    </TripDetailBodyDescriptionDiv>
  );
}
