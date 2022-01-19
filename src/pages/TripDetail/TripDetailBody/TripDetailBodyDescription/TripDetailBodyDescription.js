import React, { useState } from 'react';
import RadiusButton from '../../../../components/Buttons/RadiusButton';
import VoteCards from './VoteCards/VoteCards';
import {
  TripDetailBodyDescriptionDiv,
  TripDetailBodyDescriptionImpresstionOnPicture,
  TripDetailBodyDescriptionIntentToVisit,
  TripDetailBodyDescriptionSensibility,
  VoteNow,
  TripDetailBodyDescriptionVote,
  TripDetailBodyDescriptionInfo,
  TripDetailBodyDescriptionTags,
} from './TripDetailBodyDescriptionStyles';

export default function TripDetailBodyDescription({ detailData }) {
  const [voteProgressed, setVoteProgressed] = useState(false);
  const [firstScore, setFirstScore] = useState(0);
  const [secondScore, setSecondScore] = useState(0);
  const [thirdScore, setThirdScore] = useState(0);
  const [voteFinished, setVoteFinished] = useState(false);

  const handleVaoteStarted = () => {
    // ToDo : 토큰잇는지 확인하고 없으면 얼럿 분기
    if (!voteProgressed) setVoteProgressed(true);
  };

  const updateIndex = buttonIndex => {
    if (!firstScore) {
      setFirstScore(buttonIndex);
      return;
    }
    if (!secondScore) {
      setSecondScore(buttonIndex);
      return;
    }
    if (!thirdScore) {
      setThirdScore(buttonIndex);
      return;
    }
  };

  const updateVote = () => {
    const scores = [
      { sensibility: firstScore },
      { intent_to_visit: secondScore },
      { impresstion_on_picture: thirdScore },
    ];
    // todo : 추후 백엔드와 연결할 예정(scores POST)
    // fetch('http://**.**.*.**:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify(scores),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log('결과: ', result.message);
    //   });
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
            {!thirdScore && (
              <TripDetailBodyDescriptionImpresstionOnPicture>
                impresstion_on_picture
              </TripDetailBodyDescriptionImpresstionOnPicture>
            )}
            {!secondScore && (
              <TripDetailBodyDescriptionIntentToVisit>
                intent_to_visit
              </TripDetailBodyDescriptionIntentToVisit>
            )}
            {!firstScore && (
              <TripDetailBodyDescriptionSensibility>
                sensibility
              </TripDetailBodyDescriptionSensibility>
            )}
            {!voteProgressed && (
              <VoteNow onClick={handleVaoteStarted}>VOTE NOW</VoteNow>
            )}
            {voteProgressed && !thirdScore && (
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
