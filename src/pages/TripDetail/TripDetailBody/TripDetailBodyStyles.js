import styled from 'styled-components';

const TripDetailBodyDiv = styled.div`
  width: 80%;
  margin: 0 auto;

  > div {
    > section:first-of-type {
      height: 400px;
      object-fit: cover;

      &:hover {
        > img {
          transform: scale(1);
          filter: brightness(100%);
        }
      }

      > div {
        display: none;
      }

      > button:first-of-type {
        display: none;
      }
    }
  }
`;

const SubImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const TripDetailSubImage = styled.img`
  height: 500px;
  object-fit: cover;
  &:nth-child(n + 1) {
    margin-top: 10px;
  }
`;

export { TripDetailBodyDiv, TripDetailSubImage, SubImageContainer };
