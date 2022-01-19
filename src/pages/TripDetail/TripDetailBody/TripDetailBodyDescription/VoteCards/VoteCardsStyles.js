import styled from 'styled-components';

const VoteCardsUl = styled.ul`
  display: flex;
  justify-content: space-between;
  border-left: 1px solid #aaa;
  border-bottom: 1px solid #aaa;

  > li {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    width: 100%;
    border-right: 1px solid #aaa;
    background: #fff;
    transition: all 0.5s ease;

    &:hover {
      background: #ccc;
    }
  }
`;

export { VoteCardsUl };
