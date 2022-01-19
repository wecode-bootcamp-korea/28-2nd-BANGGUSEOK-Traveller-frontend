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
            voted_user_image,
            vote1,
            vote2,
            vote3,
            score_average,
          } = data;

          return (
            <li key={voted_user_id}>
              <UserInfoWrapper>
                <div className="profile">
                  <img src={voted_user_image} alt="img" />
                </div>
                <div className="user">{voted_user_nickname}</div>
              </UserInfoWrapper>
              <Evaluate>
                <RatingCircleWrapper>
                  <ul>
                    <li>
                      <RatingCircle
                        type="sensibility"
                        rate={vote1 * 10}
                        circleId={voted_user_nickname + 0}
                      />
                    </li>
                    <li>
                      <RatingCircle
                        type="intent_to_visit"
                        rate={vote2 * 10}
                        circleId={voted_user_nickname + 1}
                      />
                    </li>
                    <li>
                      <RatingCircle
                        type="impresstion_on_picture"
                        rate={vote3 * 10}
                        circleId={voted_user_nickname + 2}
                      />
                    </li>
                  </ul>
                </RatingCircleWrapper>
                <div className="average">
                  <span>{score_average}</span>
                </div>
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
  margin-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
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
  width: 80%;
  height: 100%;
  background-color: #fcfcfc;

  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
    padding: 5px 30px;
    border-top: 1px solid #e6eaea;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'apercu', sans-serif;

  .profile {
    width: 50px;
    height: 100%;
    margin-right: 30px;

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

const RatingCircleWrapper = styled.div`
  ul {
    display: flex;

    li {
      padding: 5px;
    }
  }
`;

const Evaluate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;

  .average {
    flex: 1;

    span {
      margin-left: 50px;
      font-size: 25px;
      font-family: 'apercu', sans-serif;
    }
  }
`;
