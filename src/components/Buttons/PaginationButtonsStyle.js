import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  clear: both;
  padding: 35px 0;
  font-size: 16px;
  overflow: hidden;
`;

const PaginationContainer = styled.div`
  width: 25%;
`;

const PaginationBtn = styled.span`
  float: left;
  display: block;
  width: 60px;
  height: 60px;
  margin-right: 1px;
  line-height: 60px;
  text-align: center;
  background-color: #fff;
  color: #202121;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const PaginationABtn = styled(PaginationBtn.withComponent('a'))`
  text-decoration: none;
  background-color: ${props => (props.isActive ? '#999' : '#fff')};

  &:hover {
    background-color: #bbb;
  }
`;

const PaginationNextBtn = styled(PaginationBtn.withComponent('a'))`
  width: 100%;
  background-color: #000;
  color: #fff;
`;

export {
  PaginationWrapper,
  PaginationContainer,
  PaginationBtn,
  PaginationABtn,
  PaginationNextBtn,
};
