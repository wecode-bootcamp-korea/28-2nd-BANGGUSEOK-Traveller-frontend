import styled from 'styled-components';

const SingleListDiv = styled.div`
  background: #f5f7f6;
  padding: 50px 66px;
`;

const SingleListName = styled.p`
  font-size: 18px;
  padding-bottom: 50px;
`;

const SingleListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 23%));
  column-gap: 2%;
  row-gap: 100px;
`;

const LoadMoreButton = styled.button`
  display: block;
  width: 150px;
  height: 50px;
  margin: auto;
  margin-top: 65px;
  border: none;
  background: #fff;
`;

export { SingleListDiv, SingleListName, SingleListUl, LoadMoreButton };
