import React from 'react';
import styled from 'styled-components';
import RatingCircle from '../../../components/RatingCircle/RatingCircle';

export default function TripDetailVotes({ votesData }) {
  return (
    <Wrapper>
      <Header>
        <HeaderLeft>USER VOTES</HeaderLeft>
        <MoreInfo>i</MoreInfo>
      </Header>
      <Users>
        {votesData?.map(data => {
          const {
            voted_user_id,
            voted_user_nickname,
            // voted_user_image,
            vote1,
            vote2,
            vote3,
            score_average,
          } = data;

          return (
            <li key={voted_user_id}>
              <UserInfoWrapper>
                <Profile>
                  {/* <Image src={voted_user_image} alt="img" /> */}
                </Profile>
                <div>{voted_user_nickname}</div>
              </UserInfoWrapper>
              <Evaluate>
                <RatingCircleWrapper>
                  <RatingCircleUl>
                    <RatingCircleLi>
                      <RatingCircle
                        type="sensibility"
                        rate={vote1 * 10}
                        circleId={voted_user_nickname + '0'}
                      />
                    </RatingCircleLi>
                    <RatingCircleLi>
                      <RatingCircle
                        type="intent_to_visit"
                        rate={vote2 * 10}
                        circleId={voted_user_nickname + '1'}
                      />
                    </RatingCircleLi>
                    <RatingCircleLi>
                      <RatingCircle
                        type="impression_on_picture"
                        rate={vote3 * 10}
                        circleId={voted_user_nickname + '2'}
                      />
                    </RatingCircleLi>
                  </RatingCircleUl>
                </RatingCircleWrapper>
                <Score>
                  <Average>{score_average}</Average>
                </Score>
              </Evaluate>
            </li>
          );
        })}
      </Users>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 30px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 100%;
  background-color: #fcfcfc;
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  height: 70px;
  font-family: 'apercu', sans-serif;
`;

const MoreInfo = styled.button`
  margin-right: 30px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 50%;
  font-size: 18px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    color: #49c5b6;
    border: 1px solid #49c5b6;
    transition: all 0.5s ease;
  }
`;

const Users = styled.div`
  text-align: center;
  width: 75%;
  height: 100%;
  background-color: #fcfcfc;

  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
    padding: 10px 30px;
    border-top: 1px solid #e6eaea;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'apercu', sans-serif;
`;

// const Image = styled.img`
//   width: 60px;
//   height: 60px;
//   object-fit: cover;
//   border-radius: 50%;
// `;

const Profile = styled.div`
  width: 50px;
  height: 100%;
  margin-right: 30px;
`;

const RatingCircleWrapper = styled.div``;

const RatingCircleLi = styled.li`
  padding: 5px;
`;

const RatingCircleUl = styled.ul`
  display: flex;
`;

const Evaluate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`;

const Score = styled.div`
  flex: 1;
  width: 30px;
`;

const Average = styled.span`
  margin-left: 50px;
  font-size: 25px;
  font-family: 'apercu', sans-serif;
`;
