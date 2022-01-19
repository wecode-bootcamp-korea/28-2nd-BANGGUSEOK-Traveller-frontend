import React from 'react';
import styled from 'styled-components';
import RatingCircle from '../../../components/RatingCircle/RatingCircle';

export default function TripDetailVotes() {
  return (
    <Header>
      <div className="header">
        <div className="headerLeft">USER VOTES</div>
        <button className="moreInfo" type="button">
          i
        </button>
      </div>
      <Users>
        {USER_INFO.map(list => {
          return (
            <li key={list.id}>
              <div className="userInfoWrapper">
                <div className="profile">{list.profile}</div>
                <div className="user">{list.user}</div>
              </div>
              <div className="evaluate">
                <div className="ratingCircle">
                  <RatingCircle />
                </div>
                <div className="average">
                  <span>{list.average}</span>
                </div>
              </div>
            </li>
          );
        })}
      </Users>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100%;
    background-color: #fcfcfc;
  }

  .headerLeft {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    height: 70px;
    font-family: 'apercu', sans-serif;
  }

  .moreInfo {
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
  }
`;

const Users = styled.ul`
  width: 80%;
  height: 100%;
  background-color: #fcfcfc;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
    padding: 15px 30px;
    border-top: 1px solid #e6eaea;

    .userInfoWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'apercu', sans-serif;

      .profile {
        width: 50px;
        height: 100%;
        margin-right: 30px;
      }
    }

    .evaluate {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;

      .average {
        width: 70px;

        span {
          text-align: right;
          font-size: 25px;
          font-weight: 400;
          font-family: 'apercu', sans-serif;
        }
      }
    }
  }
`;

const USER_INFO = [
  { id: 1, profile: 'Cullen', user: 'France', average: '6.15' },
  { id: 2, profile: 'Rick', user: 'United Kingdom', average: '7.24' },
  { id: 3, profile: 'James', user: 'Netherlands', average: '8.11' },
  { id: 4, profile: 'Ben', user: 'Ukraine', average: '7.94' },
];
