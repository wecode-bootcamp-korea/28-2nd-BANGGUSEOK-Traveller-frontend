import styled from 'styled-components';

const TripDetailWrapper = styled.div`
  background: #fff;
  transition: transform 0.5s ease;
`;

const TripDetailSkeleton = styled.div`
  height: calc(100vh - 100px);
`;

export { TripDetailWrapper, TripDetailSkeleton };
