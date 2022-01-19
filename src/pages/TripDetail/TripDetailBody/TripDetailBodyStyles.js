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

export { TripDetailBodyDiv };
